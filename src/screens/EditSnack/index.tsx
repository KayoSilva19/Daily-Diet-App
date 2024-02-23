import { Container, ContentButton, ContentForm, FormData } from './styles';

import { HeaderNewSnack } from '@components/HeaderNewSanck';
import { Input } from '@components/Input';
import { Button } from '@components/Button';
import { useRoute } from '@react-navigation/native';
import { FOODS } from '@utils/data/Foods';
import { ButtonDiet } from '@components/ButtonDiet';

type RouteParams = {
  id: string
}

export function EditSnack() {

  const route = useRoute()
  const { id } = route.params as RouteParams
  
  const filteredFood =
  FOODS.map((item) => item.data).flat()
  .find((food) => food.id === id)
 
  const  date = FOODS.map((item) => item.dateInsert)


  return (
    <Container>
      <HeaderNewSnack title='Editar Refeição'/>
      <FormData>
        <Input type='medium' title='Nome' nameInput={filteredFood?.foodName}/>
        <Input type='large' title='Descrição' nameInput={filteredFood?.foodDescription}/>
        <ContentForm>
          <Input type='small' title='Data'nameInput={filteredFood?.dateInsert}/>
          <Input type='small'title='Hora'  nameInput={filteredFood?.foodTime}/>
        </ContentForm>
        <ContentForm>
          <ButtonDiet isSelected={filteredFood?.foodType}>
            <ButtonDiet.Icon  type='healthy' />
          </ButtonDiet>
          <ButtonDiet TextStyleProps='Não'>
            <ButtonDiet.Icon type='industrialized'/>
          </ButtonDiet>
        </ContentForm>
      </FormData>
      <ContentButton>
        <Button>
          <Button.Text>Salvar alterações</Button.Text>
        </Button>
      </ContentButton>
    </Container>
  )
}