import { useMemo } from "react";
import { BackgroundImageProps } from "./types";
import { getImage } from "@themes/images";

export const BackgroundImage = ({
	name,
	resizeMode,
	imageHeight,
	imageWidth,
	children,
}: BackgroundImageProps) => {
	const memoizedImage = useMemo(() => getImage(name), [name]);

	const width = imageWidth || "100%";

	return (
		<div
			style={{
				height: imageHeight,
				width,
				objectFit: resizeMode ?? "cover",
				backgroundImage: `url(${memoizedImage})`,
			}}
		>
			{children}
		</div>
	);
};
