import { Button } from '@components/Button';
import theme from "../../theme"

import { 
  Container, HeaderSection, Subtitle, 
} from './styles';
import FeatherIcon  from '@expo/vector-icons/Feather'

export function SectionListDiet() {
  return (
    <Container>
      <HeaderSection>
      <Subtitle>Refições</Subtitle>
        <Button>
          <Button.Icon>
            <FeatherIcon name="plus" size={18} color={theme.COLORS.white}/>
          </Button.Icon>
          
          <Button.Text>Nova refeição</Button.Text>
        </Button>
      </HeaderSection>
    </Container>
  )
}