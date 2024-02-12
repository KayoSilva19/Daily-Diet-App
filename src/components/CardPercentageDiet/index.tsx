import { useNavigation } from '@react-navigation/native';
import { 
  CardStylePercentageDietProps, 
  Container, 
  ArrowUpCard, 
  SubTitle, 
  TextPercentage 
} from './styles';
import { TouchableOpacityProps } from 'react-native';

type CardPercentageDietProps = TouchableOpacityProps & {
  percentage: string;
  withinTheDiet?: CardStylePercentageDietProps;
}
  
export function CardPercentageDiet({ percentage, withinTheDiet = true,...rest }: CardPercentageDietProps) { 
  
  const navigation = useNavigation()
  function handlePercentage() {
    navigation.navigate('PercentageDiet')
  }

  return (
    <Container 
      onPress={handlePercentage} 
      withinTheDiet={withinTheDiet} 
      {...rest} 
      activeOpacity={0.7}
    >
      <TextPercentage>{percentage}</TextPercentage>
      <SubTitle>das refeições dentro da dieta</SubTitle>
     <ArrowUpCard name="arrow-up-right" withinTheDiet={withinTheDiet}/>
    </Container>
  )
}