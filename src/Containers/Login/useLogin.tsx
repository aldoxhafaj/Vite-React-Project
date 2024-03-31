import { LoginForm } from '@components/organisms/LoginForm';
import { RegisterForm } from '@components/organisms/RegisterForm';
import { useLoginSchema } from '@validations/useLoginSchema';
import { useRegisterSchema } from '@validations/useRegisterSchema';
import { useFormik } from 'formik';
import { Key, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { useNavigate } from 'react-router-dom';
import { usePermissions } from 'src/contexts/AuthContext';

import { FormikProps, Tab } from './types';

export const useLogin = () => {
  const { isAdmin } = usePermissions();
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState<Key>(Tab.SIGN_IN);
  const loginSchema = useLoginSchema();
  const registerSchema = useRegisterSchema();

  const onTabChange = (key: Key) => {
    setSelectedTab(key);
  };

  const navigateToDashboard = () => {
    if (isAdmin) {
      navigate('/admin/dashboard');
      return;
    }
    navigate('/user/dashboard');
  };

  const formik = useFormik<FormikProps>({
    initialValues: {
      email: '',
      password: '',
      bussinessName: '',
      regEmail: '',
      regPassword: '',
      confirmPassword: '',
    },
    validationSchema:
      selectedTab === Tab.SIGN_IN ? loginSchema : registerSchema,
    validateOnMount: true,
    onSubmit: () => {
      if (selectedTab === Tab.SIGN_IN) {
        navigateToDashboard();
      }
      //TODO
    },
  });

  const tabs = [
    {
      id: Tab.SIGN_IN,
      label: <FormattedMessage id="loginTab.label" defaultMessage="Sign in" />,
      content: <LoginForm formik={formik} onKeyDown={navigateToDashboard} />,
    },
    {
      id: Tab.SIGN_UP,
      label: (
        <FormattedMessage id="registerTab.label" defaultMessage="Sign up" />
      ),

      content: (
        <RegisterForm
          formik={formik}
          onKeyDown={() => {
            //TODO
          }}
        />
      ),
    },
  ];

  return {
    tabs,
    onTabChange,
  };
};
