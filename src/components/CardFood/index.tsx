import { 
  Container, 
  FoodContent, 
  FoodStatus, 
  FoodText, 
  TimeText, 
  CardStylesFoodStatusProps 
} from './styles';
import { PressableProps } from 'react-native';

type CardFoodProps = PressableProps & {
  foodtype: CardStylesFoodStatusProps
}

export function CardFood({ foodtype="healthy", ...rest }: CardFoodProps) {
  return (
    <Container>
      <TimeText>20:00</TimeText>
      <FoodContent>
        <FoodText>Whey protein com leite</FoodText>
        <FoodStatus type={foodtype}/>
      </FoodContent>
    </Container>
  )
}