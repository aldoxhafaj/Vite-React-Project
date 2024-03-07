import { Input } from "@components/Input";
import { Tab, Tabs } from "@nextui-org/react";

export const useLogin = () => {
  const tabs = [
    {
      id: "signIn",
      label: "Sign in",
      content: <Input type={"email"} label={"Email"} isInvalid={false} />,
    },
    {
      id: "signUp",
      label: "Sign up",
      content: <Input type={"email"} label={"Email"} isInvalid={false} />,
    },
  ];

  const AuthenticationTabs = () => {
    return (
      <div className="flex w-full flex-col items-center">
        <Tabs aria-label="Dynamic tabs" items={tabs} fullWidth>
          {(item) => (
            <Tab key={item.id} title={item.label} className="w-full">
              {item.content}
            </Tab>
          )}
        </Tabs>
      </div>
    );
  };

  return { AuthenticationTabs };
};
