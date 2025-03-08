import React from 'react';

const FormInput = ({name, type, value, label, onChange}) => {
    return (
        <div>
            <label className="block mb-4" htmlFor={name}>{label}</label>
            <input type={type} onChange={onChange} name={name} id={name} value={value} />
        </div>
    );
};

export default FormInput;