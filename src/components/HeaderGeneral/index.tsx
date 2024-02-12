import { StatusBar, TouchableOpacityProps } from 'react-native';
import { Container, BackIcon, Title, SubTitle, HeaderStylesProps, BackButton } from './styles'
import theme from 'src/theme';
import { useNavigation } from '@react-navigation/native';

type HeaderGeneralProps = TouchableOpacityProps &{
  percentage: string;
  subtitle?: boolean;
  withinTheDiet: HeaderStylesProps;
}

export function HeaderGeneral({ percentage, subtitle, withinTheDiet = true, ...rest }: HeaderGeneralProps) {
  const { COLORS } = theme
  const navigation = useNavigation()

  function handleGoBack() {
    navigation.goBack()
  }

  return (
    <Container withinTheDiet={withinTheDiet}>
      <StatusBar 
        barStyle="dark-content" 
        backgroundColor={ withinTheDiet ? COLORS.green_light : COLORS.red_light }
        translucent
      />

    <BackButton {...rest} onPress={handleGoBack} activeOpacity={0.7}>
        <BackIcon name='arrow-left' withinTheDiet={withinTheDiet} />
    </BackButton>

      <Title>{percentage}</Title>
      { subtitle && <SubTitle >das refeições dentro da dieta</SubTitle> }
    </Container>
  )
}