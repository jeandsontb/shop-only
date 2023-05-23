import { TextInputProps } from 'react-native';

import { theme } from '../../theme/theme';
import { DisplayFlexColumn } from '../globalStyles/globalView.style';
import { Text } from '../text';
import { textTypes } from '../text/textTypes';
import S from './styles';

interface IInputProps extends TextInputProps {
  title?: string;
}

const Input = ({ title, ...props }: IInputProps) => {
  return (
    <DisplayFlexColumn>
      {title && (
        <Text
          margin="0px 0px 4px 8px"
          type={textTypes.PARAGRAPH_SMALL_SEMIBOLD}
          color={theme.colors.grayTheme.gray100}
        >
          {title}
        </Text>
      )}

      <S.Input {...props} />
    </DisplayFlexColumn>
  );
};

export { Input };
