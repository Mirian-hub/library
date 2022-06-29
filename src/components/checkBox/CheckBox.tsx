import React from "react";
import './checkBox.sass'
export const CheckBox = () => {
  return (
    <span className="cp-container">
      <label className="up-cb-container">
        <input
          type="checkbox"
          //   [checked]="toggled"
          //   (change)="onChanged($event)"
          //   (blur)="onBlur($event)"
          //   [disabled]="disabled"
        />
        <span className="up-checkmark" data-test="up-checkbox"></span>
      </label>
    </span>
  );
};
