import { LoginFormProps } from "./types";

export const useLoginForm = ({ formik, onKeyDown }: LoginFormProps) => {
	const { handleChange, handleBlur, isValid } = formik;

	const onEnterPress = (event: React.KeyboardEvent<HTMLFormElement>) => {
		if (isValid && onKeyDown) {
			onKeyDown(event);
		}
		return;
	};

	const onChange = (event: string | React.ChangeEvent<HTMLInputElement>) => {
		handleBlur(event);
		handleChange(event);
	};

	return {
		formik,
		onEnterPress,
		onChange,
	};
};
