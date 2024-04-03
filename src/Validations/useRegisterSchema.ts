import { useIntl } from 'react-intl';

import { useYup } from './useYup';

export const useRegisterSchema = () => {
  const { Yup } = useYup();
  const { formatMessage } = useIntl();

  const registerSchema = {
    bussinessName: Yup.string()
      .min(
        3,
        formatMessage(
          {
            id: 'registerSchema.minLength.bussinessName',
            defaultMessage:
              'Bussiness name must be at least {minLength} charachters',
          },
          {
            minLength: 3,
          },
        ),
      )
      .required(
        formatMessage({
          id: 'registerSchema.required.bussinessName',
          defaultMessage: 'Business name is required',
        }),
      ),
    regPassword: Yup.string()
      .min(
        6,
        formatMessage(
          {
            id: 'schema.minLength.password',
            defaultMessage: 'Password must be at least {minLength} charachters',
          },
          {
            minLength: 6,
          },
        ),
      )
      .matches(
        /[A-Z]/,
        formatMessage({
          id: 'schema.oneUppercaseLetter.password',
          defaultMessage: 'Password contain at least one uppercase letter',
        }),
      )
      .required(
        formatMessage({
          id: 'schema.required.password',
          defaultMessage: 'Password is required',
        }),
      ),
    confirmPassword: Yup.string()
      .oneOf(
        [Yup.ref('regPassword'), undefined],
        formatMessage({
          id: 'registerSchema.invalid.confirmPassword',
          defaultMessage: 'Passwords must match',
        }),
      )
      .required(
        formatMessage({
          id: 'registerSchema.required.confirmPassword',
          defaultMessage: 'Please confirm your password',
        }),
      ),
    regEmail: Yup.string()
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        formatMessage({
          id: 'schema.invalid.email',
          defaultMessage: 'Invalid email',
        }),
      )
      .required(
        formatMessage({
          id: 'schema.required.email',
          defaultMessage: 'Email is required',
        }),
      ),
  };

  return Yup.object().shape(registerSchema);
};
