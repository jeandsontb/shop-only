import styled from 'styled-components/native';

interface TextProps {
  color?: string;
  fontSize: string;
  fontFamily: 'Poppins-Bold' | 'Poppins-Light' | 'Poppins-Regular';
}

export default {
  TextCustom: styled.Text<TextProps>`
    font-size: ${({ fontSize }: TextProps) => fontSize};
    font-family: ${({ fontFamily }: TextProps) => fontFamily};
    ${({ color }: TextProps) => (color ? `color: ${color}` : '')}
  `,
};
