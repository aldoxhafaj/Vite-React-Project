import { RowProps } from "./types";

export const Row = ({
	children,
	justifyContent,
	alignItems,
	marginTop,
	gap,
	flex,
}: RowProps) => {
	return (
		<div
			style={{
				flexDirection: "row",
				justifyContent: justifyContent ? justifyContent : "center",
				alignItems: alignItems ? alignItems : "center",
				flex,
				marginTop,
				gap,
			}}
		>
			{children}
		</div>
	);
};
