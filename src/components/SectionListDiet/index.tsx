import { Button } from '@components/Button';
import { CardFood } from '@components/CardFood';

import { 
  Container, HeaderSection, Subtitle, TextSectionList, 
} from './styles';

import FeatherIcon  from '@expo/vector-icons/Feather'
import theme from "../../theme"
import { useNavigation } from '@react-navigation/native';

import { SectionList} from 'react-native';
import { useState } from 'react';
import { CardStylesFoodStatusProps } from '@components/CardFood/styles';
import { ListEmpty } from '@components/ListEmpty';

type infosFoodProps = {
  foodName: string;
  foodTime: string;
  foodType: CardStylesFoodStatusProps;
}

type foodsProps = {
  dateInsert: string;
  data: infosFoodProps[];
}


export function SectionListDiet() {
  const [foods, setFoods] = useState<foodsProps[]>([
    {
      dateInsert: '20.08.24', 
      data: [{ 
        foodName: 'Whey protein com leite',
        foodTime: '10:00',
        foodType: "healthy",
      },
      {
        foodName: 'X-Bacon',
        foodTime: '20:00',
        foodType: "industrialized",
      }
    ] ,
  },
  {
    dateInsert: '19.08.24', 
    data: [
      { 
        foodName: 'Sorvete Fit',
        foodTime: '10:00',
        foodType: "healthy",
      },
      {
        foodName: 'X-Bacon',
        foodTime: '20:00',
        foodType: "industrialized",
      },
      { 
      foodName: 'Whey protein com leite',
      foodTime: '17:00',
      foodType: "healthy",
    },
  ] ,
}
])

  const navigation  = useNavigation()
  function handleNewSnack() {

  }

  return (
    <Container>
      <HeaderSection>
      <Subtitle>Refeições</Subtitle>
        <Button onPress={handleNewSnack}>
          <Button.Icon>
            <FeatherIcon name="plus" size={18} color={theme.COLORS.white}/>
          </Button.Icon>
          
          <Button.Text>Nova refeição</Button.Text>
        </Button>
      </HeaderSection>

      <SectionList 
        sections={foods}
        keyExtractor={(item) => item.foodName}
        stickySectionHeadersEnabled={false} 
        renderItem={({item}) => (
          <CardFood 
            foodName={item.foodName}
            foodTime={item.foodTime}
            foodType={item.foodType as CardStylesFoodStatusProps} 
          />
        )}

        renderSectionHeader={({ section: {dateInsert} }) => 
        <TextSectionList>
          {dateInsert}
        </TextSectionList> 
    }

        ListEmptyComponent={<ListEmpty />}

        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          { paddingBottom: 100, marginTop: 32 },
          foods.length === 0 && { flex: 1},
        ]}
      />
    </Container>
  )
}