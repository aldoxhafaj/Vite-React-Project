import { useIntl } from 'react-intl';

import { CardButton } from './types';

export const useUserDashboard = () => {
  const { formatMessage } = useIntl();

  const CARD_BUTTONS: CardButton[] = [
    {
      title: formatMessage({
        id: 'dashboard.cardWidget.finacialStats',
        defaultMessage: 'Financial Statistics',
      }),
      value: '$764,455,387.84',
      leftIcon: 'money',
      onClick: () => undefined,
    },
    {
      title: formatMessage({
        id: 'dashboard.cardWidget.activeClients',
        defaultMessage: 'Active Clients',
      }),
      value: '7,643',
      leftIcon: 'filledClients',
      onClick: () => undefined,
    },
    {
      title: formatMessage({
        id: 'dashboard.cardWidget.totalEmployees',
        defaultMessage: 'Total Employees',
      }),
      value: '52',
      leftIcon: 'filledBriefcase',
      onClick: () => undefined,
    },
  ];

  return {
    cardButtons: CARD_BUTTONS,
  };
};
