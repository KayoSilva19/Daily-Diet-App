import { CardsPercentage } from './components/CardsPercentage';
import { 
  Container, ContainerFood, TitleStatistics
} from './styles';


export function StatisticsGeneral() {
  return (
    <Container>
      <TitleStatistics>Estatísticas gerais</TitleStatistics>
      <CardsPercentage 
        type='large'
        title={4}
        subTitle='melhor sequência de pratos dentro da dieta'
      />
      <CardsPercentage 
        type='large'
        title={109}
        subTitle='refeições registradas'
      />

      <ContainerFood>
        <CardsPercentage type='small' />
        <CardsPercentage type='small' withinTheDiet={false}/>
      </ContainerFood>
    </Container>
  )
}