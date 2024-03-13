import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { Container } from "@layouts/container";
import { Color } from "@themes/color";
import { LoginFormProps } from "./types";

export const LoginForm = ({
	onEmailChange,
	onPasswordChange,
	isDisabled,
	onClick,
	onKeyDown,
}: LoginFormProps) => {
	return (
		<Container
			flexGrow={1}
			className="h-full flex flex-col items-center justify-between gap-2"
		>
			<form className="w-full" onKeyDown={onKeyDown}>
				<Container className="flex w-full flex-col gap-3">
					<Input
						type={"email"}
						label={"Email"}
						isRequired
						onChange={onEmailChange}
					/>
					<Input
						type={"password"}
						label={"Password"}
						isRequired
						onChange={onPasswordChange}
					/>
				</Container>
			</form>
			<Container className="w-full">
				<Button
					className="text-white font-bold font-cabin"
					backgroundColor={Color.GREEN}
					isDisabled={isDisabled}
					onPress={onClick}
				>
					Login
				</Button>
			</Container>
		</Container>
	);
};
