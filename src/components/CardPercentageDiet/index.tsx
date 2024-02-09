import { CardStylePercentageDietProps, Container, TextInfoDiet, TextPercentage } from "./styles";
import { TouchableOpacityProps } from "react-native";

type CardPercentageDietProps = TouchableOpacityProps & {
  percentage: number;
  withinTheDiet?: CardStylePercentageDietProps;
}

export default function CardPercentageDiet({ percentage, withinTheDiet = true,...rest }: CardPercentageDietProps) {
  return (
    <Container withinTheDiet={withinTheDiet} {...rest}>
      <TextPercentage>{percentage}</TextPercentage>
      <TextInfoDiet>index</TextInfoDiet>
    </Container>
  )
}