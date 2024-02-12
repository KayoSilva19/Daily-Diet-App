import { CardsPercentage } from './components/CardsPercentage';
import { 
  Container, TitleStatistics
} from './styles';


export function StatisticsGeneral() {
  return (
    <Container>
      <TitleStatistics>Estatísticas gerais</TitleStatistics>
      <CardsPercentage type='large'/>
      <CardsPercentage type='large'/>
    </Container>
  )
}