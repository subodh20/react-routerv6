import clsx from "clsx";
import { useId, useState } from "react";

import classes from "./ToggleInput.module.scss";

export default function ToggleInput({ label, checked }) {
  const id = useId();
  return (
    <div className={classes.ToggleInput}>
      <div className={classes.Left}>
        <label className={classes.Label}>{label}</label>
        <p className={classes.ToggleValue}>{checked ? "Yes" : "No"}</p>
      </div>
      <div className={classes.Right}>
        <input
          type="checkbox"
          className={clsx(classes.Input, checked && classes.Checked)}
          checked={checked}
          id={id}
        />
        <label htmlFor={id} className={classes.CheckLabel}>
          Checkbox
        </label>
      </div>
    </div>
  );
}
