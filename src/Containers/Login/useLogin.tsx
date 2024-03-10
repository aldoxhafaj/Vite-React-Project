import { Input } from "@components/Input";
import { LoginForm } from "@components/LoginForm/LoginForm";
import { useState } from "react";

type InputValue = React.ChangeEvent<HTMLInputElement> | string;

export const useLogin = () => {
  const [email, setEmail] = useState<InputValue>("");
  const [password, setPassword] = useState<InputValue>("");

  const onSelectionChange = () => {
    setEmail("");
    setPassword("");
  };

  const isDisabled = !email || !password;

  const tabs = [
    {
      id: "signIn",
      label: "Sign in",
      content: (
        <LoginForm
          onEmailChange={(value) => setEmail(value)}
          onPasswordChange={(value) => setPassword(value)}
          isDisabled={isDisabled}
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
