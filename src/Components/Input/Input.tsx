import { Input as InputComponent } from "@nextui-org/react";
import { InputComponentProps } from "./types";

export const Input = ({
  size = "sm",
  type,
  label,
  variant = "flat",
  value,
  defaultValue = "",
  startContent,
  endContent,
  errorMessage,
  isInvalid = false,
  isDisabled = false,
  isReadOnly = false,
  isRequired = false,
  onChange,
}: InputComponentProps) => {
  return (
    <InputComponent
      size={size}
      type={type}
      label={label}
      value={value}
      defaultValue={defaultValue}
      variant={variant}
      startContent={startContent}
      endContent={endContent}
      isInvalid={isInvalid}
      errorMessage={errorMessage}
      isDisabled={isDisabled}
      isReadOnly={isReadOnly}
      isRequired={isRequired}
      onChange={(event) => onChange(event.target.value)}
      fullWidth
    />
  );
};
