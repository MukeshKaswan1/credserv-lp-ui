"use client";
import ButtonMUI, { ButtonProps as MUIButtonProps } from "@mui/material/Button";
import { forwardRef } from "react";

export type ButtonProps = MUIButtonProps & {
  variant?: MUIButtonProps["variant"]; // "contained" | "outlined" | "text"
  size?: MUIButtonProps["size"]; // "small" | "medium" | "large"
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  props,
  ref
) {
  return <ButtonMUI ref={ref} {...props} />;
});

export default Button;


