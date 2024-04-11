import { CardButton } from './types';

export const useUserDashboard = () => {
  const CARD_BUTTONS: CardButton[] = [
    {
      title: 'Financial Statistics',
      value: '$764,455,387.84',
      leftIcon: 'money',
      onClick: () => undefined,
    },
    {
      title: 'Active Clients',
      value: '7,643',
      leftIcon: 'filledClients',
      onClick: () => undefined,
    },
    {
      title: 'Total Employees',
      value: '52',
      leftIcon: 'filledBriefcase',
      onClick: () => undefined,
    },
  ];
  return {
    cardButtons: CARD_BUTTONS,
  };
};
