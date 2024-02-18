import { CardspercentageStyleDietProps, CardspercentageStyleProps, ContainerLarge, ContainerSmall, SubTitleLarge, SubTitleSmall, TextLarge, TextSmall } from './style'

type CardsPercentageProps = {
  title?: number,
  subTitle?: string,
  type: CardspercentageStyleProps
  withinTheDiet?: CardspercentageStyleDietProps

}

export function CardsPercentage({ title, subTitle,  withinTheDiet = true, type = 'large' }:CardsPercentageProps) {
  return (
    <>
      { type === 'large' ?
          <ContainerLarge>
            <TextLarge>{title}</TextLarge>
            <SubTitleLarge>{subTitle}</SubTitleLarge>
          </ContainerLarge>

        : 
          <ContainerSmall withinTheDiet={withinTheDiet}>
            <TextSmall>32</TextSmall>
            <SubTitleSmall>
              {withinTheDiet &&'refeições dentro da dieta'}
              {!withinTheDiet &&'refeições fora da dieta'}
            </SubTitleSmall>
          </ContainerSmall>

      }
    </>
  )
}