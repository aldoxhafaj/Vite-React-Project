import { BackgroundImage } from '@layouts/backgroundImage';
import { Container } from '@layouts/container';
import { ImageSize } from '@themes/images';
import { HorizontalSpacing } from '@themes/spacing';

import { NotificationBellProps } from './types';

export const NotificationBell = ({
  notifications,
  iconSize = ImageSize.S,
  onClick,
}: NotificationBellProps) => {
  return (
    <Container
      className="cursor-pointer select-none transition-opacity rounded-sm hover:bg-slate-200 active:opacity-60"
      padding={HorizontalSpacing.XS}
      onClick={onClick}
    >
      <BackgroundImage name="bell" imageHeight={iconSize} imageWidth={iconSize}>
        {!!notifications && (
          <div className="w-2 h-2 rounded-full bg-red-500 absolute top-0 right-0" />
        )}
      </BackgroundImage>
    </Container>
  );
};
