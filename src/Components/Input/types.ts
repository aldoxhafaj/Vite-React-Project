import { ReactNode } from "react";

export type InputProps = {
  size?: "sm" | "md" | "lg";
  type?: string;
  label?: string;
  variant?: "flat" | "faded" | "bordered" | "underlined";
  startContent?: ReactNode;
  endContent?: ReactNode;
  isInvalid?: boolean;
  errorMessage?: string;
  isDisabled?: boolean;
  isReadOnly?: boolean;
  isRequired?: boolean;
  onChange?: () => void; //TODO this got to be not optional
};
