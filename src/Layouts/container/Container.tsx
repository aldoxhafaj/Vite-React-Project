import { ContainerProps } from "./types";

export const Container = ({
  className,
  padding,
  paddingBottom,
  paddingLeft,
  paddingRight,
  paddingTop,
  borderRadius,
  borderTopLeftRadius,
  borderTopRightRadius,
  borderBottomRightRadius,
  borderBottomLeftRadius,
  borderColor,
  borderWidth,
  backgroundColor,
  flex,
  flexGrow,
  boxShadow,
  children,
}: ContainerProps) => {
  return (
    <div
      className={className}
      style={{
        paddingBottom,
        paddingLeft,
        paddingRight,
        paddingTop,
        padding,
        borderTopLeftRadius,
        borderTopRightRadius,
        borderBottomRightRadius,
        borderBottomLeftRadius,
        borderRadius,
        borderColor,
        borderWidth,
        backgroundColor,
        flex,
        flexGrow,
        boxShadow,
      }}
    >
      {children}
    </div>
  );
};
