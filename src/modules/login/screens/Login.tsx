import { Button } from '../../../shared/components/button';
import { Input } from '../../../shared/components/input/input';
import { theme } from '../../../shared/theme/theme';
import S from './styles';

const Login = () => {
  return (
    <S.BoxContainer>
      <Input />
      <Button type={theme.buttons.buttonsTheme.primary} title="Entrar" margin="8px" />
    </S.BoxContainer>
  );
};

export default Login;
