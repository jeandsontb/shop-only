import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';

import { theme } from '../../theme/theme';

interface ButtonProps {
  margin?: string;
}

export const ButtonSecondary = styled.TouchableOpacity<ButtonProps>`
  width: 100%;
  height: 48px;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border-width: 1px;
  border-color: ${theme.colors.mainTheme.primary};
  ${({ margin }: ButtonProps) => (margin ? `margin: ${margin}` : '')}
`;

export const ButtonGradient = styled.TouchableOpacity<ButtonProps>`
  width: 100%;
  height: 48px;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border-width: 1px;
  border-color: ${theme.colors.mainTheme.primary};
  ${({ margin }: ButtonProps) => (margin ? `margin: ${margin}` : '')}
`;

export const GradientButton = styled(LinearGradient)<ButtonProps>`
  width: 100%;
  height: 48px;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  ${({ margin }: ButtonProps) => (margin ? `margin: ${margin}` : '')}
`;
