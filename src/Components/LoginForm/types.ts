export type LoginFormProps = {
  onEmailChange: (value: React.ChangeEvent<HTMLInputElement> | string) => void;
  onPasswordChange: (
    value: React.ChangeEvent<HTMLInputElement> | string,
  ) => void;
  isDisabled: boolean;
  onClick: () => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLFormElement>) => void;
};
