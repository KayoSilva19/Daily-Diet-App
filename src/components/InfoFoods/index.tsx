import { Container, Description, Tag, TagFood, TextTag, Time, Title, TitleTime } from "./styles";

type ContentInfoFoodsProps = {
  id: string;
  foodName: string;
  foodDescription: string;
  foodTime: string;
  foodType: string;
};

type InfoFoodsProps = {
  food: ContentInfoFoodsProps; 
};

export function InfoFoods({ food }:InfoFoodsProps) {
  return (
    <Container>
        <Title>{food.foodName}</Title>
        <Description>{food.foodDescription}</Description>

        <TitleTime>Data e Hora</TitleTime>
        <Time>{food.foodTime}</Time>

        <TagFood> 
          <Tag withinTheDiet={food.foodType}/>
          <TextTag>
            { food.foodType === 'healthy' && 'dentro da dieta' }
            { food.foodType === 'industrialized' && 'fora da dieta' }
          </TextTag>
        </TagFood>
      </Container>
  )
}