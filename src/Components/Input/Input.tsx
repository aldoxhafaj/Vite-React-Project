import { Input as InputComponent } from "@nextui-org/react";
import { InputProps } from "./types";

export const Input = ({
  size = "sm",
  type,
  label,
  variant = "bordered",
  isInvalid,
  errorMessage,
}: InputProps) => {
  return (
    <InputComponent
      size={size}
      type={type}
      label={label}
      variant={variant}
      isInvalid={isInvalid}
      errorMessage={errorMessage}
      //onValueChange={(value:string) => onChange(value)}
      //   startContent={
      //     <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
      //   }
      fullWidth
    />
  );
};
