import { ContainerProps } from './types';

export const Container = ({
  className,
  padding,
  paddingBottom,
  paddingLeft,
  paddingRight,
  paddingHorizontal,
  paddingVertical,
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
  margin,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  marginHorizontal,
  marginVertical,
}: ContainerProps) => {
  return (
    <div
      className={className}
      style={{
        paddingTop: paddingTop || paddingVertical || padding,
        paddingBottom: paddingBottom || paddingVertical || padding,
        paddingLeft: paddingHorizontal || paddingLeft || padding,
        paddingRight: paddingHorizontal || paddingRight || padding,
        borderColor,
        borderWidth,
        backgroundColor,
        flex,
        flexGrow,
        borderTopLeftRadius: borderTopLeftRadius ?? borderRadius,
        borderTopRightRadius: borderTopRightRadius ?? borderRadius,
        borderBottomRightRadius: borderBottomRightRadius ?? borderRadius,
        borderBottomLeftRadius: borderBottomLeftRadius ?? borderRadius,
        boxShadow,
        marginTop: marginTop || marginVertical || margin,
        marginBottom: marginBottom || marginVertical || margin,
        marginRight: marginRight || marginHorizontal || margin,
        marginLeft: marginLeft || marginHorizontal || margin,
      }}
    >
      {children}
    </div>
  );
};
