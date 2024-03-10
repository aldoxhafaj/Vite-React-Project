import { Input as InputComponent } from "@nextui-org/react";
import { InputProps } from "./types";

export const Input = ({
  size = "sm",
  type,
  label,
  variant = "flat",
  startContent,
  endContent,
  errorMessage,
  isInvalid = false,
  isDisabled = false,
  isReadOnly = false,
  isRequired = false,
}: InputProps) => {
  return (
    <InputComponent
      size={size}
      type={type}
      label={label}
      variant={variant}
      startContent={startContent}
      endContent={endContent}
      isInvalid={isInvalid}
      errorMessage={errorMessage}
      isDisabled={isDisabled}
      isReadOnly={isReadOnly}
      isRequired={isRequired}
      //onValueChange={(value:string) => onChange(value)}
      //   startContent={
      //     <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
      //   }
      fullWidth
    />
  );
};
