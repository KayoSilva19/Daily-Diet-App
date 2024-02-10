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
  foodName: string;
  foodType?: CardStylesFoodStatusProps;
  foodTime: string;
}

export function CardFood({ foodName, foodTime, foodType='healthy', ...rest }: CardFoodProps) {
  return (
    <Container>
      <TimeText>{foodTime}</TimeText>
      <FoodContent>
        <FoodText>{foodName}</FoodText>
        <FoodStatus type={foodType}/>
      </FoodContent>
    </Container>
  )
}