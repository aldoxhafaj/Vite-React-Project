import { Button } from '@components/Button';
import { Input } from '@components/Input';
import { Container } from '@layouts/container';
import { Color } from '@themes/color';
import { useIntl } from 'react-intl';

import { RegisterFormProps } from './types';
import { useRegisterForm } from './useRegisterForm';

export const RegisterForm = ({ formik, onKeyDown }: RegisterFormProps) => {
  const { onEnterPress } = useRegisterForm({ formik, onKeyDown });
  const { isValid, submitForm } = formik;
  const { formatMessage } = useIntl();
  return (
    <Container
      flexGrow={1}
      className="h-full flex flex-col items-center justify-between gap-2"
    >
      <form className="w-full" onKeyDown={onEnterPress}>
        <Container className="flex w-full flex-col gap-3">
          <Input
            type="text"
            label={formatMessage({
              id: 'input.bussinessNameLabel',
              defaultMessage: 'Bussiness name',
            })}
            name="bussinessName"
            onChange={() => {
              //TODO
            }}
          />
          <Input
            type="email"
            label={formatMessage({
              id: 'input.emailLabel',
              defaultMessage: 'Email',
            })}
            name="regEmail"
            onChange={() => {
              //TODO
            }}
          />
          <Input
            type="password"
            label={formatMessage({
              id: 'input.passwordLabel',
              defaultMessage: 'Password',
            })}
            name="regPassword"
            onChange={() => {
              //TODO
            }}
          />
          <Input
            type="password"
            label={formatMessage({
              id: 'input.confirmPasswordLabel',
              defaultMessage: 'Confirm password',
            })}
            name="confirmPassword"
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
          {formatMessage({
            id: 'registerForm.button',
            defaultMessage: 'Register',
          })}
        </Button>
      </Container>
    </Container>
  );
};
