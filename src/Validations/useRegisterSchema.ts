import { useYup } from './useYup';

export const useRegisterSchema = () => {
  const { Yup } = useYup();
  const registerSchema = {
    bussinessName: Yup.string()
      .min(3, 'Business name must be at least 3 characters')
      .required('Business name is required'),
    regPassword: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('regPassword'), undefined], 'Passwords must match')
      .required('Please confirm your password'),
    regEmail: Yup.string()
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        'Invalid email',
      )
      .required('Email is required'),
  };

  return Yup.object().shape(registerSchema);
};
