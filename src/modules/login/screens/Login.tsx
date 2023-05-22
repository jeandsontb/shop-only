import { Button } from '../../../shared/components/button';
import { Input } from '../../../shared/components/input/input';
import S from './styles';

const Login = () => {
  return (
    <S.BoxContainer>
      <Input />
      <Button title="Entrar" margin="8px" />
    </S.BoxContainer>
  );
};

export default Login;
