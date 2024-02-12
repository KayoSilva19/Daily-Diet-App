import { CardspercentageStyleProps, ContainerLarge, SubTitleLarge, TextLarge } from './style'

type CardsPercentageProps = {
  type: CardspercentageStyleProps
}

export function CardsPercentage({ type }:CardsPercentageProps) {
  return (
    <>
      { type === 'large' ?
          <ContainerLarge>
            <TextLarge>4</TextLarge>
            <SubTitleLarge>melhor sequência de pratos dentro da dieta</SubTitleLarge>
          </ContainerLarge>

        : ''

      }
    </>
  )
}