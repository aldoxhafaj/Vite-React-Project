import { Input } from "@components/Input";
import { LoginForm } from "@components/LoginForm/LoginForm";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { usePermissions } from "src/contexts/AuthContext";

type InputValue = React.ChangeEvent<HTMLInputElement> | string;

export const useLogin = () => {
	const [email, setEmail] = useState<InputValue>("");
	const [password, setPassword] = useState<InputValue>("");
	const { isAdmin } = usePermissions();
	const navigate = useNavigate();

	const isDisabled = !email || !password;

	const onSelectionChange = () => {
		setEmail("");
		setPassword("");
	};

	const navigateToDashboard = () => {
		if (isAdmin) {
			navigate("/admin/dashboard");
			return;
		}
		navigate("/user/dashboard");
	};

	const navigateOnKeyDown = (event: React.KeyboardEvent<HTMLFormElement>) => {
		if (isDisabled) return;
		if (event.code === "Enter") {
			navigateToDashboard();
		}
	};

	const tabs = [
		{
			id: "signIn",
			label: "Sign in",
			content: (
				<LoginForm
					onEmailChange={(value) => setEmail(value)}
					onPasswordChange={(value) => setPassword(value)}
					isDisabled={isDisabled}
					onClick={navigateToDashboard}
					onKeyDown={navigateOnKeyDown}
				/>
			),
		},
		{
			id: "signUp",
			label: "Sign up",
			content: (
				<Input
					type={"email"}
					label={"Email"}
					isRequired
					onChange={(value) => setEmail(value)}
				/>
			),
		},
	];

	return {
		tabs,
		onSelectionChange,
	};
};
