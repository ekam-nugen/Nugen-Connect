import React from "react";

const ProgressBar = ({ steps, currentStep }: any) => {
  const stepWidth = 100 / steps.length;
  const completedWidth = currentStep * stepWidth;

  return (
    <div className="relative w-full bg-gray-200 rounded-full">
      <div
        className={`absolute h-full rounded-full bg-blue-500`}
        style={{ width: `${completedWidth}%` }}
      />
      <div className="flex justify-between items-center h-full px-4 text-sm font-medium text-gray-700">
        {steps.map((step: string, index: number) => (
          <div
            key={currentStep}
            className={`flex-1 text-center ${
              index < currentStep ? "text-white" : "text-gray-700"
            }`}
          >
            {step}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;
