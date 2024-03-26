import { FormikProps } from "@containers/Login/types";
import { FormikContextType } from "formik";

export type RegisterFormProps = {
	formik: FormikContextType<FormikProps>;
	onKeyDown?: (event: React.KeyboardEvent<HTMLFormElement>) => void;
};
