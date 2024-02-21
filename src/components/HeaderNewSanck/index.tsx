import { StatusBar, TouchableOpacity } from 'react-native';
import { ButtonBack, Container, Icon, TextHeader } from './styles';

import theme from 'src/theme';
import { useNavigation } from '@react-navigation/native';

type HeadersNewSnackProps = {
  title: string
}

export function HeaderNewSnack({ title }:HeadersNewSnackProps) {
  const navigate = useNavigation()
  const { COLORS } = theme
  
  return (
    <Container>
      <StatusBar  
        barStyle='dark-content' 
        backgroundColor={COLORS.gray_500}
        translucent
        />

      <ButtonBack onPress={() => navigate.goBack()} activeOpacity={0.7}>
        <Icon name='arrow-left'/>
      </ButtonBack>
      <TextHeader>{title}</TextHeader> 
    </Container>
    
  )
}