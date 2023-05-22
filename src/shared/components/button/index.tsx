import { TouchableOpacityProps } from 'react-native';

import { theme } from '../../theme/theme';
import { Text } from '../text';
import { textTypes } from '../text/textTypes';
import S from './styles';

interface IButtonProps extends TouchableOpacityProps {
  title: string;
  margin?: string;
}

const Button = ({ title, margin, ...props }: IButtonProps) => {
  return (
    <S.Button {...props} margin={margin}>
      <Text type={textTypes.BUTTON_BOLD} color={theme.colors.neutralTheme.white}>
        {title}
      </Text>
    </S.Button>
  );
};

export { Button };
