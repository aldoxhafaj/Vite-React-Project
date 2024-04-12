import { CardWidget } from '@components/CardWidget';
import { Input } from '@components/Input';
import { ProfileTile } from '@components/ProfileTile';
import { ImageComponent } from '@layouts/backgroundImage';
import { Container } from '@layouts/container';
import { Row } from '@layouts/row';
import { Text } from '@layouts/typography/Text';
import { Color } from '@themes/color';
import { FontSize } from '@themes/fontSize';
import { ImageSize } from '@themes/images';
import { HorizontalSpacing } from '@themes/spacing';
import { useIntl } from 'react-intl';

import { useUserDashboard } from './useUserDashboard';

export const UserDashboard = () => {
  const { cardButtons } = useUserDashboard();
  const { formatMessage } = useIntl();

  return (
    <Container className="h-full" flexGrow={1} padding={HorizontalSpacing.S}>
      <Row justifyContent="space-between" padding={HorizontalSpacing.S}>
        <Text className="font-cabin font-bold">
          {formatMessage({
            id: 'userDashboard.headline',
            defaultMessage: 'Overview',
          })}
        </Text>
        <Row flex={1} justifyContent="flex-end" gap={HorizontalSpacing.S}>
          <Container flexGrow={0.3}>
            <Input
              placeholder="Search"
              endContent={<ImageComponent name="search" />}
              onChange={() => undefined}
            />
          </Container>
          <ImageComponent name="bell" />

          <ProfileTile
            username={formatMessage({
              id: 'userDashboard.profileTile.username',
              defaultMessage: 'Hi James Conor',
            })}
            imageSize={ImageSize.S_M}
          />
        </Row>
      </Row>
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
