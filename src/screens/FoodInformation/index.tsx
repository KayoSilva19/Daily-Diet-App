import { useRoute } from "@react-navigation/native";
import { Container, ContainerFooter } from "./styles";

import { FOODS } from "@utils/data/Foods";
import { HeaderGeneral } from "@components/HeaderGeneral";
import { InfoFoods } from "@components/InfoFoods";
import { Button } from "@components/Button";

import FeatherIcon  from '@expo/vector-icons/Feather'
import theme from "src/theme";

type RouteParams = {
  id: string
}

export function FoodInformation() {

  const { COLORS } = theme

  const route = useRoute()
  const { id } = route.params as RouteParams
  
  const filteredFood =
  FOODS.map((item) => item.data).flat()
  .find((food) => food.id === id)

  return (
    <Container>
      <HeaderGeneral withinTheDiet={filteredFood?.foodType}/>
      <InfoFoods food={filteredFood!}/>
     <ContainerFooter>
     <Button>
        <Button.Icon>
          <FeatherIcon 
            name='edit-3'
            size={18}
            color={COLORS.white}
          />
        </Button.Icon>
        <Button.Text>Editar refeição</Button.Text>
      </Button>

     <Button type='Secondary'>
        <Button.Icon>
          <FeatherIcon 
            name='trash-2'
            size={18}
            color={COLORS.gray_200}
          />
        </Button.Icon>
        <Button.Text type='Secondary'>Excluir refeição</Button.Text>
      </Button>
     </ContainerFooter>
    </Container>
  )
}