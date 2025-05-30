import React, { useState } from 'react';
import Animation from './components/Animation';
import Controls from './components/Controls';

interface AnimationValues {
    outer: boolean;
    onlySuggestions: boolean;
    success: boolean;
    warning: boolean;
}

const initialValues: AnimationValues = {
    outer: false,
    onlySuggestions: false,
    success: false,
    warning: false
};

const App: React.FC = () => {
    const [values, setValues] = useState<AnimationValues>(initialValues);

    const handleValuesChange = (newValues: AnimationValues) => {
        console.log('Values changed:', newValues);
        setValues(newValues);
    };

    const handleReset = () => {
        console.log('Resetting all values');
        setValues(initialValues);
    };

    return (
        <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
            <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Rive Animation</h1>
            <div style={{ width: '100%', height: '400px', marginBottom: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
                <Animation {...values} onReset={handleReset} />
            </div>
            <Controls values={values} onChange={handleValuesChange} />
        </div>
    );
};

export default App;