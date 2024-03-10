import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { Container } from "@layouts/container";
import { Color } from "@themes/color";
import { LoginFormProps } from "./types";

export const LoginForm = ({
  onEmailChange,
  onPasswordChange,
  isDisabled,
}: LoginFormProps) => {
  return (
    <Container
      flexGrow={1}
      className="h-full flex flex-col items-center justify-between"
    >
      <Container className="flex w-full flex-col gap-3">
        <Input
          type={"email"}
          label={"Email"}
          variant={"bordered"}
          isRequired
          onChange={onEmailChange}
        />
        <Input
          type={"password"}
          label={"Password"}
          variant={"bordered"}
          isRequired
          onChange={onPasswordChange}
        />
      </Container>
      <Container className="w-full">
        <Button
          className="text-white font-bold font-cabin"
          backgroundColor={Color.GREEN}
          isDisabled={isDisabled}
        >
          Login
        </Button>
      </Container>
    </Container>
  );
};
