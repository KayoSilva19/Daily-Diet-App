import { StatusBar, Text } from 'react-native';
import { Container } from './styles';

import theme from 'src/theme';
import { HeaderNewSnack } from '@components/HeaderNewSanck';
import { FormData } from '@components/FormData';

export function EditSnack() {

  return (
    <Container>
      <HeaderNewSnack title='Editar Refeição'/>
      <FormData />
    </Container>
  )
}