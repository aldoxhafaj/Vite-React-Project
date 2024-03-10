import { Input } from "@components/Input";
import { Container } from "@layouts/container";
import { Tab, Tabs } from "@nextui-org/react";

export const useLogin = () => {
  const LoginForm = () => {
    return (
      <Container
        flexGrow={1}
        className="h-full flex flex-col items-center justify-between"
      >
        <div className="flex w-full flex-col gap-3">
          <Input
            type={"email"}
            label={"Email"}
            variant={"bordered"}
            isRequired
          />
          <Input
            type={"password"}
            label={"Password"}
            variant={"bordered"}
            isRequired
          />
        </div>
        <Container>
          <button>Login</button>
        </Container>
      </Container>
    );
  };

  const tabs = [
    {
      id: "signIn",
      label: "Sign in",
      content: <LoginForm />,
    },
    {
      id: "signUp",
      label: "Sign up",
      content: <Input type={"email"} label={"Email"} isRequired />,
    },
  ];

  const AuthenticationTabs = () => {
    return (
      <div className="flex flex-grow w-full flex-col items-center">
        <Tabs aria-label="Dynamic tabs" items={tabs} fullWidth>
          {(item) => (
            <Tab key={item.id} title={item.label} className="w-full flex-grow">
              {item.content}
            </Tab>
          )}
        </Tabs>
      </div>
    );
  };

  return { AuthenticationTabs };
};
