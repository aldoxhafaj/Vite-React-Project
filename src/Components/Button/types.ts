import { ButtonProps } from "@nextui-org/react";
import { Color } from "@themes/color";

export type ButtonComponentProps = ButtonProps & {
  height?: number;
  backgroundColor?: Color;
};
