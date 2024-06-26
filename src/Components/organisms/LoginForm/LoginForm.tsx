import { Button } from '@components/Button';
import { Input } from '@components/Input';
import { Container } from '@layouts/container';
import { Color } from '@themes/color';
import { useIntl } from 'react-intl';

import { LoginFormProps } from './types';
import { useLoginForm } from './useLoginForm';

export const LoginForm = ({ formik, onKeyDown }: LoginFormProps) => {
  const { onEnterPress, onChange } = useLoginForm({ onKeyDown, formik });
  const { values, errors, touched, isValid, submitForm } = formik;
  const { formatMessage } = useIntl();

  return (
    <Container
      flexGrow={1}
      className="h-full flex flex-col items-center justify-between gap-2"
    >
      <form className="w-full" onKeyDown={onEnterPress}>
        <Container className="flex w-full flex-col gap-3">
          <Input
            type="email"
            label={formatMessage({
              id: 'input.emailLabel',
              defaultMessage: 'Email',
            })}
            name="email"
            value={values.email}
            onChange={onChange}
            isInvalid={touched.email && !!errors.email}
            errorMessage={touched.email && errors.email}
          />
          <Input
            type="password"
            label={formatMessage({
              id: 'input.passwordLabel',
              defaultMessage: 'Password',
            })}
            name="password"
            value={values.password}
            onChange={onChange}
            isInvalid={touched.password && !!errors.password}
            errorMessage={touched.password && errors.password}
          />
        </Container>
      </form>
      <Container className="w-full">
        <Button
          className="text-white font-bold font-cabin"
          backgroundColor={Color.GREEN}
          isDisabled={!isValid}
          onPress={submitForm}
        >
          {formatMessage({
            id: 'loginForm.button',
            defaultMessage: 'Login',
          })}
        </Button>
      </Container>
    </Container>
  );
};
