import { ImageComponent } from '@layouts/backgroundImage';
import { Container } from '@layouts/container';
import { Row } from '@layouts/row';
import { Text } from '@layouts/typography/Text';
import { BorderRadius } from '@themes/borderRadius';
import { Color } from '@themes/color';
import { FontSize } from '@themes/fontSize';
import { HorizontalSpacing, VerticalSpacing } from '@themes/spacing';

import { ProfileTileProps } from './types';

export const ProfileTile = ({
  avatar = 'anonimousAvatar',
  imageSize,
  username,
  backgroundColor = Color.GREY_2,
}: ProfileTileProps) => {
  return (
    <Container
      className="cursor-pointer select-none transition-opacity hover:opacity-85 active:opacity-60"
      backgroundColor={backgroundColor}
      borderRadius={BorderRadius.XS}
      paddingVertical={VerticalSpacing.XS}
      paddingHorizontal={HorizontalSpacing.S}
    >
      <Row gap={HorizontalSpacing.XS} justifyContent="flex-start">
        <ImageComponent
          className="rounded-sm overflow-hidden"
          name={avatar}
          imageHeight={imageSize}
          imageWidth={imageSize}
        />
        <Text className="font-cabin" fontSize={FontSize.OVERLINE}>
          {username}
        </Text>
      </Row>
    </Container>
  );
};
