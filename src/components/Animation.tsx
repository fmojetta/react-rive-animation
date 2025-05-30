import React from 'react';
import { useRive } from 'rive-react';

interface AnimationProps {
  outer: boolean;
  onlySuggestions: boolean;
  success: boolean;
  warning: boolean;
  onReset?: () => void;
}

const Animation: React.FC<AnimationProps> = ({ outer, onlySuggestions, success, warning, onReset }) => {
  const { rive, RiveComponent } = useRive({
    src: '/smart_check.riv',
    autoplay: true,
    stateMachines: ['State Machine 1'],
  });

  const handleReset = () => {
    if (rive) {
      // Stop the current state machine
      rive.stop('State Machine 1');
      // Reset all inputs to false
      const inputs = rive.stateMachineInputs('State Machine 1');
      if (inputs) {
        inputs.forEach(input => {
          input.value = false;
        });
      }
      // Reset the animation and restart from entry
      rive.reset();
      rive.play('State Machine 1');
      // Notify parent to reset states
      onReset?.();
    }
  };

  React.useEffect(() => {
    if (!rive) return;

    try {
      const stateMachines = rive.stateMachineNames;
      console.log('Available state machines:', stateMachines);
      
      if (!stateMachines.includes('State Machine 1')) {
        console.error('State Machine 1 not found. Available machines:', stateMachines);
        return;
      }

      const inputs = rive.stateMachineInputs('State Machine 1');
      if (!inputs) {
        console.error('No inputs found for State Machine 1');
        return;
      }

      console.log('Available inputs:', inputs);

      const outerInput = inputs.find((input) => input.name === 'outer?');
      const suggestionsInput = inputs.find((input) => input.name === 'SuggestionOnly?');
      const successInput = inputs.find((input) => input.name === 'Success?');
      const warningInput = inputs.find((input) => input.name === 'Warning?');

      if (outerInput) {
        console.log('Setting outer to:', outer);
        outerInput.value = outer;
      }
      if (suggestionsInput) {
        console.log('Setting onlySuggestions to:', onlySuggestions);
        suggestionsInput.value = onlySuggestions;
      }
      if (successInput) {
        console.log('Setting success to:', success);
        successInput.value = success;
      }
      if (warningInput) {
        console.log('Setting warning to:', warning);
        warningInput.value = warning;
      }
    } catch (error) {
      console.error('Error updating Rive animation:', error);
    }
  }, [rive, outer, onlySuggestions, success, warning]);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <RiveComponent style={{ width: '100%', height: '100%' }} />
      <button
        onClick={handleReset}
        style={{
          position: 'absolute',
          bottom: '10px',
          right: '10px',
          padding: '8px 16px',
          backgroundColor: '#007AFF',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Reset Animation
      </button>
    </div>
  );
};

export default Animation;