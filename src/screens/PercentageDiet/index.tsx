import { HeaderGeneral } from "@components/HeaderGeneral";
import { BodyContent, Container } from "./styles";
import { StatisticsGeneral } from "@components/StatisticsGeneral";

export function PercentageDiet() {
  return (
    <Container>
      <HeaderGeneral 
        percentage="30,21%" 
        subtitle        
        withinTheDiet={false}
      />

      <BodyContent>
        <StatisticsGeneral />
      </BodyContent>
    </Container>
  )
}