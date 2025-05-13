"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Typography from "@mui/material/Typography";
import { CiCircleAlert, CiCircleChevDown } from "react-icons/ci";
import { Button } from "../button";
import { useState } from "react";

interface StepperProps {
  steps: string[];
  initialStep?: number;
  onFinish?: () => void;
  onStepChange?: (step: number) => void;
  backButtonLabel?: string;
  nextButtonLabel?: string;
  finishButtonLabel?: string;
}

export default function StepperFooter({
  steps,
  initialStep = 0,
  onFinish,
  onStepChange,
  backButtonLabel = "Back",
  nextButtonLabel = "Next",
  finishButtonLabel = "Finish",
}: StepperProps) {
  const [activeStep, setActiveStep] = useState(initialStep);

  const handleNext = () => {
    const nextStep = activeStep + 1;
    setActiveStep(nextStep);
    onStepChange?.(nextStep);
  };

  const handleBack = () => {
    const prevStep = activeStep - 1;
    setActiveStep(prevStep);
    onStepChange?.(prevStep);
  };

  //   const handleReset = () => {
  //     setActiveStep(0);
  //     onFinish?.();
  //   };

  return (
    <div className="relative ">
      <div className="h-20 w-full flex justify-center  shadow-[0px_1px_2px_0px] items-center text-center bg-white  fixed left-0 bottom-0 pt-5 ">
        <div className="pr-24">
          <Button
            className="rounded-full cursor-pointer hover:shadow-md px-6 bg-blue-500 hover:bg-blue-600 hover:shadow-blue-500"
            color="inherit"
            disabled={activeStep === 0}
            onClick={handleBack}
            // sx={{ mr: 1 }}
          >
            {backButtonLabel}
          </Button>
        </div>

        <Box sx={{ width: "80%" }}>
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label, index) => (
              <Step key={index}>
                <StepLabel
                  sx={{
                    ".MuiStepLabel-label": {
                      fontSize: "10px !important",
                    },
                  }}
                >
                  {label}
                </StepLabel>
              </Step>
            ))}
            <div className="gap-2 flex pt-3  pl-4">
              <Button
                className="rounded-full hover:shadow-md px-6 bg-blue-500 hover:bg-blue-600 hover:shadow-blue-500"
                onClick={handleNext}
                disabled={activeStep === steps.length - 1}
              >
                {activeStep === steps.length - 1
                  ? finishButtonLabel
                  : nextButtonLabel}
              </Button>
            </div>
          </Stepper>

          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
          </Box>

          {activeStep === steps.length && (
            <Box sx={{ mt: 2 }}>
              <Typography sx={{ mb: 1 }}>
                All steps completed - you&apos;re finished
              </Typography>
              {/* <Button onClick={handleReset}>Reset</Button> */}
            </Box>
          )}
        </Box>
      </div>
    </div>
  );
}
