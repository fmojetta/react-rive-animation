import React from 'react';

interface ControlValues {
    outer: boolean;
    onlySuggestions: boolean;
    success: boolean;
    warning: boolean;
}

interface ControlsProps {
    values: ControlValues;
    onChange: (values: ControlValues) => void;
}

const Controls: React.FC<ControlsProps> = ({ values, onChange }) => {
    const handleChange = (key: keyof ControlValues) => {
        const newValues = {
            ...values,
            [key]: !values[key]
        };
        onChange(newValues);
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <input
                    type="checkbox"
                    checked={values.outer}
                    onChange={() => handleChange('outer')}
                />
                Outer
            </label>
            <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <input
                    type="checkbox"
                    checked={values.onlySuggestions}
                    onChange={() => handleChange('onlySuggestions')}
                />
                Only Suggestions
            </label>
            <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <input
                    type="checkbox"
                    checked={values.success}
                    onChange={() => handleChange('success')}
                />
                Success
            </label>
            <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <input
                    type="checkbox"
                    checked={values.warning}
                    onChange={() => handleChange('warning')}
                />
                Warning
            </label>
        </div>
    );
};

export default Controls;