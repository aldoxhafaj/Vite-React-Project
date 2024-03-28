import { DEFAULT_LANGUAGE } from '@i18n/utils/constants';
import { Language } from '@i18n/utils/enums';
import { getAppLanguage } from '@i18n/utils/getAppLanguage';
import { MESSAGES } from '@i18n/utils/messages';
import { setLocalStorage } from '@utils/storage';
import { StorageKey } from '@utils/storage/storage';
import { createContext, useCallback, useEffect, useState } from 'react';
import { IntlProvider as ReactIntlProvider } from 'react-intl';

import { IntlContextProps, IntlProviderProps } from './types';

export const IntlContext = createContext<IntlContextProps | null>(null);

export const IntlProvider = ({ children }: IntlProviderProps) => {
  const [language, setLanguage] = useState<Language>(DEFAULT_LANGUAGE);

  const changeLanguage = (nextLanguage: Language) => {
    setLocalStorage(StorageKey.LANGUAGE, nextLanguage);
    setLanguage(nextLanguage);
  };

  const loadAppLanguage = useCallback(async () => {
    const lang = await getAppLanguage();
    if (lang) {
      changeLanguage(lang as Language);
    }
  }, []);

  useEffect(() => {
    loadAppLanguage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <IntlContext.Provider value={{ language, changeLanguage }}>
      <ReactIntlProvider
        locale={language}
        messages={MESSAGES[language]}
        defaultLocale={DEFAULT_LANGUAGE}
      >
        {children}
      </ReactIntlProvider>
    </IntlContext.Provider>
  );
};
