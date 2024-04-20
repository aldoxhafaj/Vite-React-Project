import { AnimationMotion } from '@components/AnimationMotion';
import { ImageComponent } from '@layouts/backgroundImage';
import { Container } from '@layouts/container';
import { Row } from '@layouts/row';
import { Text } from '@layouts/typography/Text';
import { Color } from '@themes/color';
import { FontSize } from '@themes/fontSize';
import { ImageSize } from '@themes/images';
import { HorizontalSpacing, VerticalSpacing } from '@themes/spacing';
import { AnimatePresence, domAnimation, LazyMotion } from 'framer-motion';
import { useIntl } from 'react-intl';

import { useSidebar } from './hooks/useSidebar';

export const Sidebar = () => {
  const { formatMessage } = useIntl();
  const {
    menuModules,
    toggleSidebar,
    sidebarClosed,
    sidebarAnimation,
    menuModuleAnimaton,
  } = useSidebar();

  return (
    <LazyMotion features={domAnimation} strict>
      <AnimatePresence>
        <AnimationMotion
          className="h-full bg-gradient-to-b from-cyan-500 to-blue-500"
          padding={HorizontalSpacing.S}
          backgroundColor={Color.VIVID_BLUE}
          flexGrow={0.08}
          animate={sidebarClosed ? 'closed' : 'open'}
          variants={sidebarAnimation}
        >
          <Row justifyContent="flex-end">
            <Row
              className="bg-white rounded-full p-1 transition-all select-none cursor-pointer hover:scale-125 active:scale-95"
              onClick={toggleSidebar}
            >
              <ImageComponent
                name={!sidebarClosed ? 'close' : 'extend'}
                imageHeight={ImageSize.XX_S}
                imageWidth={ImageSize.XX_S}
              />
            </Row>
          </Row>

          <AnimationMotion
            animate={sidebarClosed ? 'closed' : 'open'}
            variants={menuModuleAnimaton}
          >
            <Row
              justifyContent="flex-start"
              paddingTop={VerticalSpacing.XS}
              gap={HorizontalSpacing.S}
            >
              <ImageComponent
                name="amd"
                imageHeight={ImageSize.M_L}
                imageWidth={ImageSize.M_L}
                white
              />
              <Text
                className="font-cabin"
                fontSize={FontSize.HEADLINE_5}
                color={Color.WHITE}
              >
                {formatMessage({
                  id: 'sidebar.menu.title',
                  defaultMessage: 'Gym Tech',
                })}
              </Text>
            </Row>

            <Container paddingTop={VerticalSpacing.M}>
              {menuModules.map((item, index) => (
                <AnimationMotion
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Row
                    className="rounded-sm select-none cursor-pointer transition-all hover:bg-cyan-800 hover:bg-opacity-50 active:opacity-40"
                    justifyContent="flex-start"
                    padding={HorizontalSpacing.XS}
                    gap={HorizontalSpacing.XS}
                  >
                    <ImageComponent name={item.iconName} white />
                    <Text className="font-cabin" color={Color.WHITE}>
                      {item.text}
                    </Text>
                  </Row>
                </AnimationMotion>
              ))}
            </Container>
          </AnimationMotion>
        </AnimationMotion>
      </AnimatePresence>
    </LazyMotion>
  );
};
