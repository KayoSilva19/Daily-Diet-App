import { HeaderGeneral } from "@components/HeaderGeneral";
import { BodyContent, Container } from "./styles";

export function PercentageDiet() {
  return (
    <Container>
      <HeaderGeneral 
        percentage="30,21%" 
        subtitle        
        withinTheDiet={false}
      />

      <BodyContent></BodyContent>
    </Container>
  )
}