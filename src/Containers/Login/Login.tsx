import { BackgroundImage } from "@layouts/backgroundImage";
import { Container } from "@layouts/container";
import { BorderRadius } from "@themes/borderRadius";
import { Color } from "@themes/color";
import { ImageSize } from "@themes/images";
import { HorizontalSpacing } from "@themes/spacing";
import { verticalScale } from "@utils/calculations";
import { useLogin } from "./useLogin";
import { Shadow } from "@themes/shadow";

export const Login = () => {
  const { AuthenticationTabs } = useLogin();
  return (
    <BackgroundImage name="nature" imageHeight={ImageSize?.full}>
      <Container
        className="h-dvh flex items-center justify-center"
        padding={verticalScale(20)}
      >
        <Container
          className="h-5/6 w-2/6 shadow-shadow5"
          backgroundColor={Color.WHITE}
          padding={HorizontalSpacing.S_M}
          borderRadius={BorderRadius.S_M}
          boxShadow={Shadow.SHADOW4}
        >
          <div className="w-full h-full flex flex-col items-center justify-start">
            <div className="flex flex-col items-center gap-1">
              <p className="font-cabin font-bold">Welcome Back</p>
              <p className="text-thin text-gray-500 font-cabin">
                Welcome back!Please enter your details!
              </p>
            </div>
            <AuthenticationTabs />
          </div>
        </Container>
      </Container>
    </BackgroundImage>
  );
};
