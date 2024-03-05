import { FooterProps } from "./types";
import { VerticalSpacing } from "@themes/spacing";

export const Footer = ({
	children,
	flexGrow = 1,
	paddingBottom,
	alignItems,
}: FooterProps) => {
	return (
		<div
			style={{
				paddingTop: VerticalSpacing.M,
				flexDirection: "column",
				alignSelf: "stretch",
				justifyContent: "flex-end",
				flexGrow,
				paddingBottom,
				alignItems: alignItems ? alignItems : "center",
			}}
		>
			{children}
		</div>
	);
};
