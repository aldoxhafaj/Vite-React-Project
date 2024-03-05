import { BorderRadius } from "@themes/borderRadius";
import { Color } from "@themes/color";
import { HorizontalSpacing, VerticalSpacing } from "@themes/spacing";
import { ReactNode } from "react";

export type ContainerProps = {
	padding?: HorizontalSpacing;
	paddingBottom?: VerticalSpacing;
	paddingLeft?: HorizontalSpacing;
	paddingRight?: HorizontalSpacing;
	paddingTop?: VerticalSpacing;
	children: ReactNode;
	borderRadius?: BorderRadius;
	borderTopLeftRadius?: BorderRadius;
	borderTopRightRadius?: BorderRadius;
	borderBottomRightRadius?: BorderRadius;
	borderBottomLeftRadius?: BorderRadius;
	borderColor?: string;
	borderWidth?: number;
	backgroundColor?: Color | string;
	flex?: number;
};
