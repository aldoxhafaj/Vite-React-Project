import { Sidebar } from '@components/Sidebar';
import { Container } from '@layouts/container';
import { BorderRadius } from '@themes/borderRadius';
import { Color } from '@themes/color';
import { createContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { SCREENS_WITH_SIDEBAR } from 'src/Config/ScreensWithSidebar';

import { SidebarContextProps, SidebarProviderProps } from './types';

export const SidebarContext = createContext<SidebarContextProps | null>(null);

export const SidebarProvider = ({ children }: SidebarProviderProps) => {
  const { pathname } = useLocation();
  const [showSidebar, setShowSidebar] = useState<boolean>(false);

  const renderSidebar = () => {
    if (SCREENS_WITH_SIDEBAR.some((value) => pathname.includes(value))) {
      setShowSidebar(true);
    } else {
      setShowSidebar(false);
    }
  };

  useEffect(() => {
    renderSidebar();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <SidebarContext.Provider value={{ showSidebar }}>
      <Container className="w-full h-dvh flex items-center justify-end">
        {showSidebar && <Sidebar />}
        <Container
          className="h-full bg-gradient-to-b from-cyan-500 to-blue-500"
          flexGrow={!showSidebar ? 1 : 0.92}
          backgroundColor={Color.VIVID_BLUE}
        >
          <Container
            className="h-full overflow-hidden"
            flexGrow={1}
            borderTopLeftRadius={showSidebar ? BorderRadius.S : undefined}
            borderBottomLeftRadius={showSidebar ? BorderRadius.S : undefined}
            backgroundColor={Color.WHITE}
          >
            {children}
          </Container>
        </Container>
      </Container>
    </SidebarContext.Provider>
  );
};
