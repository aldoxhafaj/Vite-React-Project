import { HorizontalSpacing, VerticalSpacing } from "@themes/spacing";
import { FlexStyle } from "../../Types";
import { ReactNode } from "react";

export type RowProps = {
	children: ReactNode;
	marginTop?: number;
	justifyContent?: FlexStyle["justifyContent"];
	alignItems?: FlexStyle["alignItems"];
	flex?: number;
	gap?: VerticalSpacing | HorizontalSpacing;
};
