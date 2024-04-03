import { ImageComponent } from '@layouts/backgroundImage';
import { Container } from '@layouts/container';
import { Row } from '@layouts/row';
import { Text } from '@layouts/typography/Text';
import { Color } from '@themes/color';
import { ImageSize } from '@themes/images';
import { HorizontalSpacing, VerticalSpacing } from '@themes/spacing';

export const Sidebar = () => {
  return (
    <Container
      className="h-full w-full absolute top-0 bottom-0 left-0"
      padding={HorizontalSpacing.S}
      backgroundColor={Color.VIVID_BLUE}
    >
      <ImageComponent
        name="amd"
        imageHeight={ImageSize.M}
        imageWidth={ImageSize.M}
        white
      />
      <Container paddingTop={VerticalSpacing.M_L}>
        <Row
          justifyContent="flex-start"
          paddingTop={VerticalSpacing.S}
          gap={HorizontalSpacing.XS}
        >
          <ImageComponent name="home" white />
          <Text className="font-cabin" color={Color.WHITE}>
            Dashboard
          </Text>
        </Row>
        <Row
          justifyContent="flex-start"
          paddingTop={VerticalSpacing.S}
          gap={HorizontalSpacing.XS}
        >
          <ImageComponent name="briefcase" white />
          <Text className="font-cabin" color={Color.WHITE}>
            Employee
          </Text>
        </Row>
        <Row
          justifyContent="flex-start"
          paddingTop={VerticalSpacing.S}
          gap={HorizontalSpacing.XS}
        >
          <ImageComponent name="class" white />
          <Text className="font-cabin" color={Color.WHITE}>
            Classes
          </Text>
        </Row>
        <Row
          justifyContent="flex-start"
          paddingTop={VerticalSpacing.S}
          gap={HorizontalSpacing.XS}
        >
          <ImageComponent name="clients" white />
          <Text className="font-cabin" color={Color.WHITE}>
            Our Clients
          </Text>
        </Row>
        <Row
          justifyContent="flex-start"
          paddingTop={VerticalSpacing.S}
          gap={HorizontalSpacing.XS}
        >
          <ImageComponent name="amenities" white />
          <Text className="font-cabin" color={Color.WHITE}>
            Amenities
          </Text>
        </Row>
        <Row
          justifyContent="flex-start"
          paddingTop={VerticalSpacing.S}
          gap={HorizontalSpacing.XS}
        >
          <ImageComponent name="pieChart" white />
          <Text className="font-cabin" color={Color.WHITE}>
            Services
          </Text>
        </Row>
        <Row
          justifyContent="flex-start"
          paddingTop={VerticalSpacing.S}
          gap={HorizontalSpacing.XS}
        >
          <ImageComponent name="calendar" white />
          <Text className="font-cabin" color={Color.WHITE}>
            Daypass
          </Text>
        </Row>
        <Row
          justifyContent="flex-start"
          paddingTop={VerticalSpacing.S}
          gap={HorizontalSpacing.XS}
        >
          <ImageComponent name="book" white />
          <Text className="font-cabin" color={Color.WHITE}>
            Bookings
          </Text>
        </Row>
        <Row
          justifyContent="flex-start"
          paddingTop={VerticalSpacing.S}
          gap={HorizontalSpacing.XS}
        >
          <ImageComponent name="diamond" white />
          <Text className="font-cabin" color={Color.WHITE}>
            Membership
          </Text>
        </Row>
        <Row
          justifyContent="flex-start"
          paddingTop={VerticalSpacing.S}
          gap={HorizontalSpacing.XS}
        >
          <ImageComponent name="exit" white />
          <Text className="font-cabin" color={Color.WHITE}>
            Logout
          </Text>
        </Row>
      </Container>
    </Container>
  );
};
