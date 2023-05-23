import { TouchableOpacityProps } from 'react-native';

import { theme } from '../../theme/theme';
import { Text } from '../text';
import { textTypes } from '../text/textTypes';
import { ButtonGradient, ButtonSecondary, GradientButton } from './styles';

interface IButtonProps extends TouchableOpacityProps {
  title: string;
  margin?: string;
  type?: string;
}

const Button = ({ title, type, margin, ...props }: IButtonProps) => {
  switch (type) {
    case theme.buttons.buttonsTheme.secondary:
      return (
        <ButtonSecondary {...props} margin={margin}>
          <Text type={textTypes.BUTTON_BOLD} color={theme.colors.mainTheme.primary}>
            {title}
          </Text>
        </ButtonSecondary>
      );

    case theme.buttons.buttonsTheme.primary:
    default:
      return (
        <ButtonGradient {...props} margin={margin}>
          <GradientButton
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            colors={[theme.colors.purpleTheme.purple80, theme.colors.pinkTheme.pink80]}
          >
            <Text type={textTypes.BUTTON_BOLD} color={theme.colors.neutralTheme.white}>
              {title}
            </Text>
          </GradientButton>
        </ButtonGradient>
      );
  }
};

export { Button };
