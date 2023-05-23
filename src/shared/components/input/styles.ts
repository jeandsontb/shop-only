import styled from 'styled-components/native';

import { theme } from '../../theme/theme';

interface TextInputProps {
  isError?: boolean;
}

export default {
  Input: styled.TextInput<TextInputProps>`
    width: 100%;
    height: 48px;
    padding: 16px;
    background-color: ${theme.colors.neutralTheme.white};
    color: ${theme.colors.neutralTheme.black};
    border-radius: 4px;
    border-width: 1px;
    border-color: ${({ isError }: TextInputProps) =>
      isError ? theme.colors.orangeTheme.orange80 : theme.colors.grayTheme.gray80};
  `,
};
