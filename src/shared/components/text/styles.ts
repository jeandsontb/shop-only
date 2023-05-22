import styled from 'styled-components/native';

interface TextProps {
  color?: string;
  fontSize: string;
}

export default {
  TextCustom: styled.Text<TextProps>`
    font-size: ${({ fontSize }: TextProps) => fontSize};
    ${({ color }: TextProps) => (color ? `color: ${color}` : '')}
  `,
};
