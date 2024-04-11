import { ImageComponent } from '@layouts/backgroundImage';
import { Container } from '@layouts/container';
import { Row } from '@layouts/row';
import { Text } from '@layouts/typography/Text';
import { Color } from '@themes/color';
import { FontSize } from '@themes/fontSize';
import { ImageSize } from '@themes/images';
import { HorizontalSpacing, VerticalSpacing } from '@themes/spacing';
import { useIntl } from 'react-intl';

import { useSidebar } from './useSidebar';

export const Sidebar = () => {
  const { formatMessage } = useIntl();
  const { menuModules } = useSidebar();

  return (
    <Container
      className="h-full bg-gradient-to-b from-cyan-500 to-blue-500"
      padding={HorizontalSpacing.S}
      backgroundColor={Color.VIVID_BLUE}
      flexGrow={0.08}
    >
      <Row
        justifyContent="flex-start"
        paddingTop={VerticalSpacing.S}
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
      <Container paddingTop={VerticalSpacing.M_L}>
        {menuModules.map((item, index) => (
          <Row
            key={index}
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
        ))}
      </Container>
    </Container>
  );
};
