import React from "react";

const FormRow = ({ type, name, defaultValue, labelText }) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>
      <input
        type={type}
        className="form-input"
        id={name}
        name={name}
        defaultValue={defaultValue || ""}
        required
      />
    </div>
  );
};

export default FormRow;
