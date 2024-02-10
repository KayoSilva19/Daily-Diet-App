import { Button } from '@components/Button';
import { CardFood } from '@components/CardFood';

import { 
  Container, HeaderSection, Subtitle, 
} from './styles';

import FeatherIcon  from '@expo/vector-icons/Feather'
import theme from "../../theme"

export function SectionListDiet() {
  return (
    <Container>
      <HeaderSection>
      <Subtitle>Refeições</Subtitle>
        <Button>
          <Button.Icon>
            <FeatherIcon name="plus" size={18} color={theme.COLORS.white}/>
          </Button.Icon>
          
          <Button.Text>Nova refeição</Button.Text>
        </Button>
      </HeaderSection>

      <CardFood foodtype="healthy"/>
    </Container>
  )
}