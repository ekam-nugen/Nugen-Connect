import ProgressBar from "@/resuableComponents/progressBar";
// import StickyHeadTable from "@/resuableComponents/table";
import Card from "@mui/material/Card";
import React from "react";

function FormComponent() {
  const steps = [
    "Select",
    "Create",
    "Recipients",
    "Publish Settings",
    "Summary"
  ];
  const currentStep = 2;
  return (
    <div>
      <Card className="h-full w-full m-5 bg-red-300">
        {/* <StickyHeadTable /> */}
        <ProgressBar steps={steps} currentStep={currentStep} />
      </Card>
    </div>
  );
}

export default FormComponent;
