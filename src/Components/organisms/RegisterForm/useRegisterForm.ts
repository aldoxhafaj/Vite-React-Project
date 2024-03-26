import { EventCode, RegisterFormProps } from './types';

export const useRegisterForm = ({ formik, onKeyDown }: RegisterFormProps) => {
  const { isValid } = formik;
  const onEnterPress = (event: React.KeyboardEvent<HTMLFormElement>) => {
    if (isValid && onKeyDown && event.code === EventCode.ENTER) {
      onKeyDown();
    }
    return;
  };

  return {
    onEnterPress,
  };
};
