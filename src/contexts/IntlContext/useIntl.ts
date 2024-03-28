import { useContext } from 'react';
import { useIntl as useReactIntl } from 'react-intl';

import { IntlContext } from './IntlProvider';

export const useIntl = () => {
  const reactIntl = useReactIntl();
  const intlContext = useContext(IntlContext);

  if (!intlContext) {
    throw new Error('useIntl must be used within IntlContext');
  }

  return {
    ...reactIntl,
    ...intlContext,
  };
};
