export type InputProps = {
  size?: "sm" | "md" | "lg";
  type?: string;
  label?: string;
  variant?: "flat" | "faded" | "bordered" | "underlined";
  isInvalid?: boolean;
  errorMessage?: string;
  onChange?: () => void; //TODO this got to be not optional
};
