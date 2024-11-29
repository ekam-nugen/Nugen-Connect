import CloseStepper from "@/resuableComponents/closeStepper";
import StepperFooter from "@/resuableComponents/stepperfooter";
import TimeClock from "@/resuableComponents/timeClock/timeClock";
import { Stepper } from "@mui/material";
import React from "react";
import TimeClockComponent from "../timeClock";

const steps = [
  "Create",
  "Registration",
  "Assign by",
  "Recipients",
  "Publish settings",
  "Summary",
];
function Stepperpage() {
  return (
    <div>
      <CloseStepper />
      <TimeClockComponent />
      <StepperFooter steps={steps} />
    </div>
  );
}

export default Stepperpage;
