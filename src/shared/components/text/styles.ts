import styled from 'styled-components/native';

interface TextProps {
  color?: string;
  fontSize: string;
}

export default {
  TextCustom: styled.Text<TextProps>`
    font-size: ${({ fontSize }: TextProps) => fontSize};
    font-family: Poppins-Bold;
    ${({ color }: TextProps) => (color ? `color: ${color}` : '')}
  `,
};
