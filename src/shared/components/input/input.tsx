import { TextInputProps } from 'react-native';

import S from './styles';

type IInputProps = TextInputProps;

const Input = ({ ...props }: IInputProps) => {
  return <S.Input {...props} />;
};

export { Input };
