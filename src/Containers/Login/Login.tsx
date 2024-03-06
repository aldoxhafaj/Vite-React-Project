import { BackgroundImage } from "@layouts/backgroundImage";
import { Container } from "@layouts/container";
import { BorderRadius } from "@themes/borderRadius";
import { Color } from "@themes/color";
import { ImageSize } from "@themes/images";
import { HorizontalSpacing } from "@themes/spacing";
import { verticalScale } from "@utils/calculations";

export const Login = () => {
	return (
		<BackgroundImage
			name="gym"
			imageHeight={ImageSize?.full}
			resizeMode="contain"
		>
			<Container
				className="h-dvh flex items-center justify-start"
				padding={verticalScale(20)}
			>
				<Container
					className="h-5/6 shadow-shadow5 opacity-80"
					flexGrow={0.2}
					backgroundColor={Color.WHITE}
					padding={HorizontalSpacing.S_M}
					borderRadius={BorderRadius.S_M}
				>
					<div className="w-full h-full flex flex-col items-center justify-start">
						<p>Login</p>
					</div>
				</Container>
			</Container>
		</BackgroundImage>
	);
};
