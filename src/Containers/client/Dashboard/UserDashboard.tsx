import { Container } from '@layouts/container';
import { Text } from '@layouts/typography/Text';
import { HorizontalSpacing } from '@themes/spacing';

export const UserDashboard = () => {
  return (
    <Container className="h-full" flexGrow={1} padding={HorizontalSpacing.S}>
      <Text className="font-cabin">UserDashboard</Text>
    </Container>
  );
};
