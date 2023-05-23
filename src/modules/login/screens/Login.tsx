import { Button } from '../../../shared/components/button';
import { Input } from '../../../shared/components/input/input';
import { theme } from '../../../shared/theme/theme';
import S from './styles';

const Login = () => {
  const handleClickButton = () => {
    console.log('clicou');
  };

  return (
    <S.BoxContainer>
      <Input
        placeholder="Digite seu E-mail"
        placeholderTextColor={theme.colors.grayTheme.gray80}
        title="E-mail"
      />
      <Button
        type={theme.buttons.buttonsTheme.primary}
        title="ENTRAR"
        margin="8px"
        onPress={handleClickButton}
      />
    </S.BoxContainer>
  );
};

export default Login;
