import React from "react";
import "bootswatch/dist/minty/bootstrap.min.css";

const Checkbox = ({ label, isSelected, onCheckboxChange }) => (
  <div class="custom-checkbox">
    <label>
      <input
        type="checkbox"
        name={label}
        checked={isSelected}
        onChange={onCheckboxChange}
        className="form-check-input"
      />
      {label}
    </label>
  </div>
);

export default Checkbox;