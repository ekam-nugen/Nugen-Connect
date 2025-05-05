"use client";

import * as React from "react";
import { Input as BaseInput } from "@mui/base/Input";
import { Box, styled } from "@mui/system";

type OTPProps = {
  separator: React.ReactNode;
  length: number;
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
};

function OTP({ separator, length, value, onChange }: OTPProps) {
  const inputRefs = React.useRef<HTMLInputElement[]>([]);

  const focusInput = (index: number) => {
    const input = inputRefs.current[index];
    input?.focus();
  };

  const selectInput = (index: number) => {
    const input = inputRefs.current[index];
    input?.select();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    switch (e.key) {
      case "ArrowLeft":
        e.preventDefault();
        if (index > 0) {
          focusInput(index - 1);
          selectInput(index - 1);
        }
        break;
      case "ArrowRight":
        e.preventDefault();
        if (index < length - 1) {
          focusInput(index + 1);
          selectInput(index + 1);
        }
        break;
      case "Delete":
      case "Backspace":
        e.preventDefault();
        onChange(prev => {
          const otpArray = prev.split("");
          otpArray[index] = "";
          return otpArray.join("");
        });
        if (e.key === "Backspace" && index > 0) {
          focusInput(index - 1);
          selectInput(index - 1);
        }
        break;
      case "ArrowUp":
      case "ArrowDown":
      case " ":
        e.preventDefault();
        break;
      default:
        break;
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const currentValue = e.target.value;
    const lastChar = currentValue[currentValue.length - 1];

    onChange(prev => {
      const otpArray = prev.split("");
      otpArray[index] = lastChar;
      return otpArray.join("");
    });

    if (currentValue && index < length - 1) {
      focusInput(index + 1);
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLInputElement>, index: number) => {
    selectInput(index);
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>, index: number) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text/plain").slice(0, length);

    onChange(prev => {
      const otpArray = prev.split("");
      for (let i = index; i < length; i++) {
        otpArray[i] = pastedData[i - index] || "";
      }
      return otpArray.join("");
    });
  };

  return (
    <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
      {Array.from({ length }).map((_, idx) => (
        <React.Fragment key={idx}>
          <BaseInput
            slots={{ input: InputElement }}
            aria-label={`Digit ${idx + 1} of OTP`}
            slotProps={{
              input: {
                ref: (el: HTMLInputElement) => (inputRefs.current[idx] = el),
                value: value[idx] || "",
                onKeyDown: e => handleKeyDown(e, idx),
                onChange: e => handleChange(e, idx),
                onClick: e => handleClick(e, idx),
                onPaste: e => handlePaste(e, idx),
              }
            }}
          />
          {idx < length - 1 && separator}
        </React.Fragment>
      ))}
    </Box>
  );
}

export default OTP;

const blue = {
  100: "#DAECFF",
  200: "#80BFFF",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
  700: "#0059B2",
};

const grey = {
  50: "#F3F6F9",
  100: "#E5EAF2",
  200: "#DAE2ED",
  300: "#C7D0DD",
  400: "#B0B8C4",
  500: "#9DA8B7",
  600: "#6B7A90",
  700: "#434D5B",
  800: "#303740",
  900: "#1C2025",
};

const InputElement = styled("input")(({ theme }) => ({
  width: "40px",
  fontFamily: "IBM Plex Sans, sans-serif",
  fontSize: "0.875rem",
  fontWeight: 400,
  lineHeight: 1.5,
  padding: "8px 0",
  borderRadius: "8px",
  textAlign: "center",
  color: theme.palette.mode === "dark" ? grey[300] : grey[900],
  background: theme.palette.mode === "dark" ? grey[900] : "#fff",
  border: `1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]}`,
  boxShadow: `0 2px 4px ${
    theme.palette.mode === "dark" ? "rgba(0,0,0, 0.5)" : "rgba(0,0,0, 0.05)"
  }`,
  "&:hover": {
    borderColor: blue[400],
  },
  "&:focus": {
    borderColor: blue[400],
    boxShadow: `0 0 0 3px ${theme.palette.mode === "dark" ? blue[600] : blue[200]}`,
  },
  "&:focus-visible": {
    outline: 0,
  },
}));
