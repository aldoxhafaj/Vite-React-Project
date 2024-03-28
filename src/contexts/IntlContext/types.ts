import { Language } from '@i18n/utils/enums';
import { ReactNode } from 'react';

export type IntlProviderProps = {
  children: ReactNode;
};

export type IntlContextProps = {
  language: Language;
  changeLanguage: (language: Language) => void;
};
