import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { Container } from "@layouts/container";
import { Color } from "@themes/color";
import { RegisterFormProps } from "./types";

export const RegisterForm = ({ formik, onKeyDown }: RegisterFormProps) => {
	const { isValid, submitForm } = formik;
	return (
		<Container
			flexGrow={1}
			className="h-full flex flex-col items-center justify-between gap-2"
		>
			<form className="w-full" onKeyDown={onKeyDown}>
				<Container className="flex w-full flex-col gap-3">
					<Input
						type={"text"}
						label={"Bussiness name"}
						name={"bussinessName"}
						onChange={() => {
							//TODO
						}}
					/>
					<Input
						type={"email"}
						label={"Email"}
						name={"regEmail"}
						onChange={() => {
							//TODO
						}}
					/>
					<Input
						type={"password"}
						label={"Password"}
						name={"regPassword"}
						onChange={() => {
							//TODO
						}}
					/>
					<Input
						type={"password"}
						label={"Confirm password"}
						name={"confirmPassword"}
						onChange={() => {
							//TODO
						}}
					/>
				</Container>
			</form>
			<Container className="w-full">
				<Button
					className="text-white font-bold font-cabin"
					backgroundColor={Color.BLUE}
					isDisabled={isValid}
					onPress={submitForm}
				>
					Register
				</Button>
			</Container>
		</Container>
	);
};
