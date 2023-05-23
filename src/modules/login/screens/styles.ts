import styled from 'styled-components/native';

import { theme } from '../../../shared/theme/theme';

export default {
  BoxContainer: styled.View`
    height: 100%;
    width: 100%;
    background-color: ${theme.colors.neutralTheme.white};
    justify-content: center;
    align-items: center;
    padding: 16px;
  `,
};
