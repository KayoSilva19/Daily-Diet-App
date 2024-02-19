import { StatusBar, TouchableOpacityProps } from 'react-native';
import { Container, BackIcon, Title, SubTitle, HeaderStylesProps, BackButton } from './styles'
import theme from 'src/theme';
import { useNavigation } from '@react-navigation/native';

type HeaderGeneralProps = TouchableOpacityProps &{
  title?: string
  percentage?: string
  subtitle?: boolean
  withinTheDiet?: HeaderStylesProps
  headerInfo?: boolean
}

export function HeaderGeneral({ percentage, title, headerInfo = false, subtitle, withinTheDiet = 'healthy', ...rest }: HeaderGeneralProps) {
  const { COLORS } = theme
  const navigation = useNavigation()

  function handleGoBack() {
    navigation.goBack()
  }

  return (
    <Container withinTheDiet={withinTheDiet} headerInfo={headerInfo}>
      <StatusBar 
        barStyle="dark-content" 
        backgroundColor={ withinTheDiet === 'healthy' ? COLORS.green_light : COLORS.red_light }
        translucent
      />

    <BackButton headerInfo={headerInfo} {...rest} onPress={handleGoBack} activeOpacity={0.7}>
        <BackIcon name='arrow-left' withinTheDiet={withinTheDiet} />
    </BackButton>

      <Title headerInfo={headerInfo} >{percentage || title}</Title>
      { subtitle && <SubTitle >das refeições dentro da dieta</SubTitle> }
    </Container>
  )
}