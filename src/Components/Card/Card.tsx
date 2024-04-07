import { ImageComponent } from '@layouts/backgroundImage';
import { Container } from '@layouts/container';
import { Row } from '@layouts/row';
import { Text } from '@layouts/typography/Text';
import { BorderRadius } from '@themes/borderRadius';
import { Color } from '@themes/color';
import { HorizontalSpacing, VerticalSpacing } from '@themes/spacing';

import { CardProps } from './types';

export const Card = ({
  title,
  cardComponent,
  leftIcon,
  iconSize,
}: CardProps) => {
  return (
    <Container
      className="w-52 h-22 overflow-y-scroll no-scrollbar select-none transition-opacity hover:opacity-85 active:opacity-70"
      paddingHorizontal={HorizontalSpacing.M}
      paddingVertical={VerticalSpacing.S}
      borderRadius={BorderRadius.XS}
      backgroundColor={Color.VIVID_BLUE}
    >
      <Row
        className="break-words"
        justifyContent="flex-start"
        gap={HorizontalSpacing.XS}
      >
        {!!leftIcon && (
          <ImageComponent
            name={leftIcon}
            imageHeight={iconSize}
            imageWidth={iconSize}
            white
          />
        )}
        <Text className="w-full" color={Color.WHITE}>
          {title}
        </Text>
      </Row>
      <Container className="break-words" marginTop={VerticalSpacing.S}>
        {cardComponent}
      </Container>
    </Container>
  );
};
