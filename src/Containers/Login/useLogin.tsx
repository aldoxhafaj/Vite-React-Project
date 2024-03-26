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
	const [selectedTab, setSelectedTab] = useState<Key>(Tab.SIGN_IN);
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
			id: Tab.SIGN_IN,
			label: Tab.SIGN_IN,
			content: (
				<LoginForm formik={formik} onKeyDown={navigateToDashboard} />
			),
		},
		{
			id: Tab.SIGN_UP,
			label: Tab.SIGN_UP,
			content: (
				<RegisterForm formik={formik} onKeyDown={navigateToDashboard} />
			),
		},
	];

	return {
		tabs,
		onTabChange,
	};
};
