import { Button as ButtonComponent } from "@nextui-org/react";
import { verticalScale } from "@utils/calculations";
import { ButtonComponentProps } from "./types";
import { VerticalSpacing } from "@themes/spacing";
import { Color } from "@themes/color";

export const Button = ({
  children,
  className,
  variant,
  backgroundColor = Color.GREY_1,
  size = "sm",
  radius = "sm",
  spinnerPlacement = "start",
  startContent,
  endContent,
  spinner,
  isIconOnly = false,
  isDisabled = false,
  isLoading = false,
  onPress,
  height = VerticalSpacing.M,
}: ButtonComponentProps) => {
  return (
    <ButtonComponent
      className={className}
      variant={variant}
      size={size}
      radius={radius}
      spinnerPlacement={spinnerPlacement}
      startContent={startContent}
      endContent={endContent}
      spinner={spinner}
      isIconOnly={isIconOnly}
      isDisabled={isDisabled}
      isLoading={isLoading}
      fullWidth
      style={{ backgroundColor, height: verticalScale(height) }}
      onPress={onPress}
    >
      {children}
    </ButtonComponent>
  );
};
