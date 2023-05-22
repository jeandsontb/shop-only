import { Text } from 'react-native';

import { Input } from '../../../shared/components/input/input';
import S from './styles';

const Login = () => {
  return (
    <S.BoxContainer>
      <Text>Login</Text>
      <Input />
    </S.BoxContainer>
  );
};

export default Login;
