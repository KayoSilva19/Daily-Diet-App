import { 
  CardStylePercentageDietProps, 
  Container, 
  ArrowUpCard, 
  TextInfoDiet, 
  TextPercentage 
} from './styles';
import { TouchableOpacityProps } from 'react-native';

type CardPercentageDietProps = TouchableOpacityProps & {
  percentage: number;
  withinTheDiet?: CardStylePercentageDietProps;
}

export function CardPercentageDiet({ percentage, withinTheDiet = true,...rest }: CardPercentageDietProps) {
  return (
    <Container withinTheDiet={withinTheDiet} {...rest} activeOpacity={0.7}>
      <TextPercentage>{percentage}</TextPercentage>
      <TextInfoDiet>das refeições dentro da dieta</TextInfoDiet>
     <ArrowUpCard name="arrow-up-right"/>
    </Container>
  )
}