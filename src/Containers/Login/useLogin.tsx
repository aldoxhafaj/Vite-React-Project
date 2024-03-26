import { LoginForm } from "@components/organisms/LoginForm";
import { RegisterForm } from "@components/organisms/RegisterForm";
import { Key, useState } from "react";
import { useNavigate } from "react-router-dom";
import { usePermissions } from "src/contexts/AuthContext";
import { FormikProps, Tab } from "./types";
import { useFormik } from "formik";
import { useLoginSchema } from "@validations/useLoginSchema";

export const useLogin = () => {
	const { isAdmin } = usePermissions();
	const navigate = useNavigate();
	const [selectedTab, setSelectedTab] = useState<Key>("signIn");
	const loginSchema = useLoginSchema();

	const onTabChange = (key: Key) => {
		setSelectedTab(key);
	};

	const navigateToDashboard = () => {
		if (isAdmin) {
			navigate("/admin/dashboard");
			return;
		}
		navigate("/user/dashboard");
	};

	const navigateOnKeyDown = (event: React.KeyboardEvent<HTMLFormElement>) => {
		if (event.code === "Enter") {
			navigateToDashboard();
		}
	};

	const formik = useFormik<FormikProps>({
		initialValues: {
			email: "",
			password: "",
			bussinessName: "",
			regEmail: "",
			regPassword: "",
			confirmPassword: "",
		},
		validationSchema: selectedTab === Tab.SIGN_IN ? loginSchema : undefined,
		validateOnMount: true,
		onSubmit: () => {
			if (selectedTab === Tab.SIGN_IN) {
				navigateToDashboard();
			}
			//TODO
		},
	});

	const tabs = [
		{
			id: "signIn",
			label: "Sign in",
			content: (
				<LoginForm formik={formik} onKeyDown={navigateOnKeyDown} />
			),
		},
		{
			id: "signUp",
			label: "Sign up",
			content: (
				<RegisterForm formik={formik} onKeyDown={navigateOnKeyDown} />
			),
		},
	];

	return {
		tabs,
		onTabChange,
	};
};
