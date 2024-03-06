import { ShadowWrapperType, ShadowWrapperProps } from "./types";

const getShadowWrapper = (type: ShadowWrapperType) => {
	switch (type) {
		case ShadowWrapperType.SHADOW1:
			return `rgba(100, 100, 111, 0.2) 0px 7px 29px 0px`;
		case ShadowWrapperType.SHADOW2:
			return `rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px`;
		case ShadowWrapperType.SHADOW3:
			return `rgba(0, 0, 0, 0.2) 0px 18px 50px -10px`;
		case ShadowWrapperType.SHADOW4:
			return `rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px`;
		case ShadowWrapperType.SHADOW5:
			return `rgba(0, 0, 0, 0.56) 0px 22px 70px 4px`;
		default:
			return `rgba(0, 0, 0, 0.25) 0px 25px 50px -12px`;
	}
};

export const ShadowWrapper = ({ children, type }: ShadowWrapperProps) => {
	const boxShadow = getShadowWrapper(type);

	return <div style={{ boxShadow }}>{children}</div>;
};
