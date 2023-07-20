// LabeledInput.tsx
import React from 'react';

const LabeledInput = ({ label, ...inputProps }) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={inputProps.id} className="label">
        {label}
      </label>
      <input className="input" {...inputProps} />
    </div>
  );
};

export default LabeledInput;
