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
      <S.ImageLogo resizeMode="center" source={require('../../../assets/images/logo.png')} />
      <Input
        placeholder="Digite seu E-mail"
        placeholderTextColor={theme.colors.grayTheme.gray80}
        title="E-mail"
        margin="0px 0px 8px 0px"
      />

      <Input
        placeholder="Digite sua senha"
        placeholderTextColor={theme.colors.grayTheme.gray80}
        secureTextEntry
        title="Senha"
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
