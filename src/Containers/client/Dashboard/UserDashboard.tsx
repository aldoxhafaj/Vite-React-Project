import { Card } from '@components/Card';
import { Container } from '@layouts/container';
import { Row } from '@layouts/row';
import { ShadowWrapper } from '@layouts/shadowWrapper';
import { ShadowWrapperType } from '@layouts/shadowWrapper/types';
import { Text } from '@layouts/typography/Text';
import { BorderRadius } from '@themes/borderRadius';
import { Color } from '@themes/color';
import { FontSize } from '@themes/fontSize';
import { HorizontalSpacing } from '@themes/spacing';

export const UserDashboard = () => {
  return (
    <Container className="h-full" flexGrow={1} padding={HorizontalSpacing.S}>
      <Text className="font-cabin font-bold">Overview</Text>
      <Row
        className="flex-wrap"
        justifyContent="flex-start"
        gap={HorizontalSpacing.S}
      >
        <ShadowWrapper
          type={ShadowWrapperType.SHADOW4}
          borderRadius={BorderRadius.XS}
        >
          <Card
            title="Financial Statistics"
            cardComponent={
              <Text
                fontSize={FontSize.CAPTION_1}
                className="font-cabin"
                color={Color.WHITE}
              >
                $764,455,387.84
              </Text>
            }
            leftIcon="money"
          />
        </ShadowWrapper>
        <ShadowWrapper
          type={ShadowWrapperType.SHADOW4}
          borderRadius={BorderRadius.XS}
        >
          <Card
            title="Active Clients"
            cardComponent={
              <Text
                fontSize={FontSize.CAPTION_1}
                className="font-cabin"
                color={Color.WHITE}
              >
                7,643
              </Text>
            }
            leftIcon="filledClients"
          />
        </ShadowWrapper>
        <ShadowWrapper
          type={ShadowWrapperType.SHADOW4}
          borderRadius={BorderRadius.XS}
        >
          <Card
            title="Total Employees"
            cardComponent={
              <Text
                fontSize={FontSize.CAPTION_1}
                className="font-cabin"
                color={Color.WHITE}
              >
                52
              </Text>
            }
            leftIcon="filledBriefcase"
          />
        </ShadowWrapper>
      </Row>
    </Container>
  );
};
