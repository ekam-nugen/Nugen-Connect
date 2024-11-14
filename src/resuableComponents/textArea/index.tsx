import * as React from "react";
import { cn } from "@/lib/utils";
import { Label } from "../label/index";
import { AlertCircle } from "lucide-react";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: boolean;
  helpText?: string;
  disabled?: boolean;
  help?: boolean;
  icon?: boolean;
  name: string;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ error, name, help, helpText, disabled, icon, ...props }, ref) => {
    return (
      <>
        <div className="flex justify-between px-3 mb-2">
          <Label
            htmlFor={name}
            className={cn("font-normal", { "text-red-500": error })}
          >
            {props.label}
          </Label>
          {icon && (
            <AlertCircle className={cn("w-5 h-5", { "text-red-500": error })} />
          )}
        </div>

        <textarea
          className={cn(
            "flex border-[#B7C5CD] border w-full h-32 rounded-xl",
            error
              ? "border border-red-500"
              : "border border-input bg-background",
            "border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 p-3 placeholder:text-sm placeholder:text-medium",
            disabled
              ? "disabled:cursor-not-allowed disabled:opacity-50 bg-[#EAEAEA] opacity-60"
              : ""
          )}
          ref={ref}
          disabled={disabled}
          {...props}
        />
        {error &&
          !help && ( // Show help text by default when there's an error and help prop is false or not provided
            <div>
              <h1
                className={cn("font-normal text-xs mt-1.5 ml-2", {
                  "text-red-500": error,
                })}
              >
                {helpText}
              </h1>
            </div>
          )}

        {help && ( // Show help text only when the help prop is true
          <div>
            <h1
              className={cn("font-normal text-xs mt-1.5 ml-2", {
                "text-red-500": error,
              })}
            >
              {helpText}
            </h1>
          </div>
        )}
      </>
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
