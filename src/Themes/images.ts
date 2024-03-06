import gymImage from "../Shared/Images/gym.png";

const Images = {
	gym: gymImage,
};

export type ImageName = keyof typeof Images;

export const getImage = (imageName: ImageName) => Images[imageName];

import { scale } from "@utils/calculations";

enum ImageSizeEnum {
	/**
	 * 8
	 */
	X_S = 8,
	/**
	 * 10
	 */
	S = 10,
	/**
	 * 14
	 */
	S_M = 14,
	/**
	 * 16
	 */
	M = 16,
	/**
	 * 24
	 */
	L = 24,
	/**
	 * 36
	 */
	XXX_L = 36,
	/**
	 * 48
	 */
	XL1 = 50,
	XL2 = 100,
	XL3 = 150,
	XL4 = 200,
	XL5 = 250,
	XL6 = 300,
	XL7 = 350,
	XL8 = 400,
	full = "100dvh",
}

export enum ImageSize {
	/**
	 * 8
	 */
	X_S = scale(ImageSizeEnum.X_S),
	/**
	 * 10
	 */
	S = scale(ImageSizeEnum.S),
	/**
	 * 14
	 */
	S_M = scale(ImageSizeEnum.S_M),
	/**
	 * 16
	 */
	M = scale(ImageSizeEnum.M),
	/**
	 * 24
	 */
	L = scale(ImageSizeEnum.L),
	/**
	 * 36
	 */
	XXX_L = scale(ImageSizeEnum.XXX_L),
	/**
	 * 48
	 */
	XL1 = scale(ImageSizeEnum.XL1),
	XL2 = scale(ImageSizeEnum.XL2),
	XL3 = scale(ImageSizeEnum.XL3),
	XL4 = scale(ImageSizeEnum.XL4),
	XL5 = scale(ImageSizeEnum.XL5),
	XL6 = scale(ImageSizeEnum.XL6),
	XL7 = scale(ImageSizeEnum.XL7),
	XL8 = scale(ImageSizeEnum.XL8),
	full = ImageSizeEnum.full,
}
