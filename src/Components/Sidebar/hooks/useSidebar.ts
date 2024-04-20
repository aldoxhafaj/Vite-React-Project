import { useState } from 'react';
import { useIntl } from 'react-intl';

import { MenuModules } from '../types';
import { useSidebarAnimation } from './useSidebarAnimation';

export const useSidebar = () => {
  const { formatMessage } = useIntl();
  const [sidebarClosed, setSidebarClosed] = useState(false);
  const { sidebarAnimation, menuModuleAnimaton } = useSidebarAnimation();

  const MENU_MODULES: MenuModules[] = [
    {
      iconName: 'home',
      text: formatMessage({
        id: 'sidebar.route.dashboard',
        defaultMessage: 'Dashboard',
      }),
    },
    {
      iconName: 'briefcase',
      text: formatMessage({
        id: 'sidebar.route.employee',
        defaultMessage: 'Employee',
      }),
    },
    {
      iconName: 'class',
      text: formatMessage({
        id: 'sidebar.route.classes',
        defaultMessage: 'Classes',
      }),
    },
    {
      iconName: 'clients',
      text: formatMessage({
        id: 'sidebar.route.clients',
        defaultMessage: 'Our Clients',
      }),
    },
    {
      iconName: 'amenities',
      text: formatMessage({
        id: 'sidebar.route.amenities',
        defaultMessage: 'Amenities',
      }),
    },
    {
      iconName: 'pieChart',
      text: formatMessage({
        id: 'sidebar.route.services',
        defaultMessage: 'Services',
      }),
    },
    {
      iconName: 'calendar',
      text: formatMessage({
        id: 'sidebar.route.daypass',
        defaultMessage: 'Daypass',
      }),
    },
    {
      iconName: 'book',
      text: formatMessage({
        id: 'sidebar.route.bookings',
        defaultMessage: 'Bookings',
      }),
    },
    {
      iconName: 'diamond',
      text: formatMessage({
        id: 'sidebar.route.membership',
        defaultMessage: 'Membership',
      }),
    },
    {
      iconName: 'exit',
      text: formatMessage({
        id: 'sidebar.route.logout',
        defaultMessage: 'Logout',
      }),
    },
  ];

  const toggleSidebar = () => {
    setSidebarClosed((sidebarClosed) => !sidebarClosed);
  };

  return {
    menuModules: MENU_MODULES,
    toggleSidebar,
    sidebarClosed,
    sidebarAnimation,
    menuModuleAnimaton,
  };
};
