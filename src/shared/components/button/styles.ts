import styled from 'styled-components/native';

interface ButtonProps {
  margin?: string;
}

export default {
  Button: styled.TouchableOpacity`
    width: 100%;
    height: 48px;
    border-radius: 4px;
    background-color: blue;
    justify-content: center;
    align-items: center;
    ${({ margin }: ButtonProps) => (margin ? `margin: ${margin}` : '')}
  `,
  TextButton: styled.Text``,
};
