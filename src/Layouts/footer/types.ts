import { VerticalSpacing } from "@themes/spacing";
import { FlexStyle } from "../../Types";
import { ReactNode } from "react";

export type FooterProps = {
	children: ReactNode;
	flexGrow?: FlexStyle["flexGrow"];
	paddingBottom?: VerticalSpacing;
	alignItems?: FlexStyle["alignItems"];
};
