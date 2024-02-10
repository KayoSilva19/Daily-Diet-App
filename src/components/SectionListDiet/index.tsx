import { Button } from '@components/Button';
import { CardFood } from '@components/CardFood';

import { 
  Container, HeaderSection, Subtitle, 
} from './styles';

import FeatherIcon  from '@expo/vector-icons/Feather'
import theme from "../../theme"
import { FlatList } from 'react-native';
import { useState } from 'react';
import { CardStylesFoodStatusProps } from '@components/CardFood/styles';
import { ListEmpty } from '@components/ListEmpty';

type foodsProps = {
  foodName: string;
  foodTime: string;
  foodType: CardStylesFoodStatusProps;
}

export function SectionListDiet() {
  const [foods, setFoods] = useState<foodsProps[]>([])

  return (
    <Container>
      <HeaderSection>
      <Subtitle>Refeições</Subtitle>
        <Button>
          <Button.Icon>
            <FeatherIcon name="plus" size={18} color={theme.COLORS.white}/>
          </Button.Icon>
          
          <Button.Text>Nova refeição</Button.Text>
        </Button>
      </HeaderSection>

      <FlatList 
        data={foods}
        keyExtractor={(item) => item.foodName}
        renderItem={({item}) => (
          <CardFood 
            foodName={item.foodName}
            foodTime={item.foodTime}
            foodType={item.foodType as CardStylesFoodStatusProps} 
          />
        )}

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