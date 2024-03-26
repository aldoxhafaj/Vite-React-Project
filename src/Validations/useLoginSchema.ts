import { useYup } from "./useYup";

export const useLoginSchema = () => {
	const { Yup } = useYup();

	const loginSchema = {
		email: Yup.string()
			.email("Invalid email address")
			.required("Email is required"),
		password: Yup.string()
			.required("Password is required")
			.min(6, "Password must be at least 6 characters")
			.matches(
				/[A-Z]/,
				"Password must contain at least one uppercase letter"
			),
	};

	return Yup.object().shape(loginSchema);
};
