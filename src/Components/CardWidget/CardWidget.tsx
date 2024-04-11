import { ImageComponent } from '@layouts/backgroundImage';
import { Container } from '@layouts/container';
import { Row } from '@layouts/row';
import { Text } from '@layouts/typography/Text';
import { Card, CardBody, CardHeader } from '@nextui-org/react';
import { Color } from '@themes/color';
import { HorizontalSpacing } from '@themes/spacing';
import { horizontalScale } from '@utils/calculations/horizontalScale';

import { CardWidgetProps } from './types';

const CARD_MAX_WIDTH = 300;
export const CardWidget = ({
  title,
  cardBodyComponent,
  leftIcon,
  iconSize,
  shadow,
  backgroundColor = Color.VIVID_BLUE,
  cardWidth = horizontalScale(180),
  ...props
}: CardWidgetProps) => {
  return (
    <Card
      style={{
        backgroundColor,
        width: cardWidth,
        maxWidth: CARD_MAX_WIDTH,
      }}
      shadow={shadow}
      isPressable
      {...props}
    >
      <CardHeader>
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
          <Text color={Color.WHITE}>{title}</Text>
        </Row>
      </CardHeader>

      <CardBody className="pt-0">
        <Container>{cardBodyComponent}</Container>
      </CardBody>
    </Card>
  );
};
