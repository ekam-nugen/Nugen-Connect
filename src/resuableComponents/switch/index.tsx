"use client";
import * as React from "react";
import MuiSwitch from "@mui/material/Switch";

interface SwitchProps {
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Switch({ checked, onChange }: SwitchProps) {
  return (
    <MuiSwitch
      checked={checked}
      onChange={onChange}
      inputProps={{ "aria-label": "controlled" }}
    />
  );
}
