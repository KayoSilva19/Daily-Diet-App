import { useRoute } from "@react-navigation/native";
import { Container } from "./styles";

import { FOODS } from "@utils/data/Foods";
import { HeaderGeneral } from "@components/HeaderGeneral";
import { InfoFoods } from "@components/InfoFoods";

type RouteParams = {
  id: string
}

export function FoodInformation() {

  const route = useRoute()
  const { id } = route.params as RouteParams
  
  const filteredFood =
  FOODS.map((item) => item.data).flat()
  .find((food) => food.id === id)

  return (
    <Container>
      <HeaderGeneral withinTheDiet={filteredFood?.foodType}/>
      <InfoFoods food={filteredFood!}/>
    </Container>
  )
}