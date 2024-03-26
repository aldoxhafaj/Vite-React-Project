import { FormikProps } from "@containers/Login/types";
import { FormikContextType } from "formik";

export type LoginFormProps = {
	formik: FormikContextType<FormikProps>;
	onKeyDown?: (event: React.KeyboardEvent<HTMLFormElement>) => void;
};
