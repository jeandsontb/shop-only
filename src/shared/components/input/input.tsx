import { useState } from 'react';
import { TextInputProps, View } from 'react-native';

import { theme } from '../../theme/theme';
import { DisplayFlexColumn } from '../globalStyles/globalView.style';
import { Text } from '../text';
import { textTypes } from '../text/textTypes';
import S from './styles';

interface IInputProps extends TextInputProps {
  title?: string;
  errorMessage?: string;
  secureTextEntry?: boolean;
  margin?: string;
}

const Input = ({ margin, secureTextEntry, title, errorMessage, ...props }: IInputProps) => {
  const [currentSecure, setCurrentSecure] = useState<boolean>(!!secureTextEntry);

  const handleOnPressEye = () => {
    setCurrentSecure(!currentSecure);
  };

  return (
    <DisplayFlexColumn customMargin={margin}>
      {title && (
        <Text
          margin="0px 0px 4px 8px"
          type={textTypes.PARAGRAPH_SMALL_SEMIBOLD}
          color={theme.colors.grayTheme.gray100}
        >
          {title}
        </Text>
      )}

      <View>
        <S.Input
          secureTextEntry={currentSecure}
          hasSecureTextEntry={secureTextEntry}
          isError={!!errorMessage}
          {...props}
        />
        {secureTextEntry && (
          <S.IconEye
            name={currentSecure ? 'eye' : 'eye-blocked'}
            color={theme.colors.grayTheme.gray100}
            size={20}
            onPress={handleOnPressEye}
          />
        )}
      </View>

      {errorMessage && (
        <Text
          margin="0px 0px 0px 8px"
          type={textTypes.PARAGRAPH_SMALL_SEMIBOLD}
          color={theme.colors.orangeTheme.orange80}
        >
          {errorMessage}
        </Text>
      )}
    </DisplayFlexColumn>
  );
};

export { Input };
