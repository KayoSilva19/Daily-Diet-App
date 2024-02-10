
import { 
  Container, TextContainer, 
} from './styles';

import theme from 'src/theme';

import FeatherIcon  from '@expo/vector-icons/Feather'

export function ListEmpty() {
  return (
    <Container>
      <FeatherIcon name='alert-circle' size={22} color={theme.COLORS.gray_100}/>
      <TextContainer>Você não inseriu nenhuma refeição ainda!</TextContainer>
    </Container>
  )
}