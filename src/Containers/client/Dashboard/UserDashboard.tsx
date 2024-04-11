import { CardWidget } from '@components/CardWidget';
import { Container } from '@layouts/container';
import { Row } from '@layouts/row';
import { Text } from '@layouts/typography/Text';
import { Color } from '@themes/color';
import { FontSize } from '@themes/fontSize';
import { HorizontalSpacing } from '@themes/spacing';

import { useUserDashboard } from './useUserDashboard';

export const UserDashboard = () => {
  const { cardButtons } = useUserDashboard();
  return (
    <Container className="h-full" flexGrow={1} padding={HorizontalSpacing.S}>
      <Text className="font-cabin font-bold">Overview</Text>
      <Row
        className="flex-wrap"
        justifyContent="flex-start"
        gap={HorizontalSpacing.S}
      >
        {cardButtons.map((card, index) => (
          <CardWidget
            key={index}
            title={card.title}
            shadow="lg"
            cardBodyComponent={
              <Text
                fontSize={FontSize.CAPTION_1}
                className="font-cabin"
                color={Color.WHITE}
              >
                {card.value}
              </Text>
            }
            leftIcon={card.leftIcon}
          />
        ))}
      </Row>
    </Container>
  );
};
