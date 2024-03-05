import { ContainerProps } from "./types";

export const Container = ({
	padding,
	paddingBottom,
	paddingLeft,
	paddingRight,
	paddingTop,
	borderRadius,
	borderTopLeftRadius,
	borderTopRightRadius,
	borderBottomRightRadius,
	borderBottomLeftRadius,
	borderColor,
	borderWidth,
	backgroundColor,
	flex,
	children,
}: ContainerProps) => {
	return (
		<div
			style={{
				padding,
				paddingBottom,
				paddingLeft,
				paddingRight,
				paddingTop,
				borderRadius,
				borderTopLeftRadius,
				borderTopRightRadius,
				borderBottomRightRadius,
				borderBottomLeftRadius,
				borderColor,
				borderWidth,
				backgroundColor,
				flex,
			}}
		>
			{children}
		</div>
	);
};
