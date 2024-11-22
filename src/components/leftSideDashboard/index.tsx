import { Card, CardDescription, CardTitle } from "@/resuableComponents/card";
import { Check } from "lucide-react";
import React from "react";

function LeftSideDashboard() {
  return (
    <div className="flex flex-col">
      <Card className="flex flex-col justify-center items-center p-4 w-80">
        <div className="text-center mb-2">
          <div className="bg-green-100 h-12 w-12 rounded-full flex justify-center items-center">
            <Check className="text-green-500 h-6 w-6" />
          </div>
        </div>
        <CardTitle className="text-sm font-bold leading-5">
          You're in the clear
        </CardTitle>
        <CardDescription className="text-sm font-normal text-gray-600 text-center">
          New time off requests, shift requests, and requests to join the app
          will show up right here
        </CardDescription>
      </Card>
    </div>
  );
}

export default LeftSideDashboard;
