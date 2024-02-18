import styled, { css } from "styled-components/native";

export type CardspercentageStyleProps = 'small' | 'large'
export type CardspercentageStyleDietProps = boolean


type Props = {
  withinTheDiet: CardspercentageStyleDietProps
}

export const ContainerLarge = styled.View`
  width: 100%;
  gap: 8px;

  justify-content: center;
  align-items: center;
  
  padding: 16px;
  border-radius: 8px;
  background-color: ${({theme}) => theme.COLORS.gray_600};
  `
export const TextLarge = styled.Text`
  ${({theme}) => css`
  font-size: ${theme.FONT_SIZE.TITLE_MD}px;
  font-family: ${theme.FONT_FAMILY.BOLD};
  color: ${theme.COLORS.gray_100};
  `}
  `
export const SubTitleLarge = styled.Text`
  ${({theme}) => css`
  font-size: ${theme.FONT_SIZE.BODY_SM}px;
  font-family: ${theme.FONT_FAMILY.REGULAR};
  color: ${theme.COLORS.gray_200};
  `}
  text-align: center;
`
export const ContainerSmall = styled.View<Props>`
  width: 157px;
  height: 107px;
  border-radius: 8px; 
  justify-content: center;
  align-items: center;

  background-color: ${({ theme, withinTheDiet }) => withinTheDiet 
  ? theme.COLORS.green_light 
  : theme.COLORS.red_light }; 
`

export const TextSmall = styled.Text`
  ${({theme}) => css`
  font-size: ${theme.FONT_SIZE.TITLE_MD}px;
  font-family: ${theme.FONT_FAMILY.BOLD};
  color: ${theme.COLORS.gray_100};
  `}
  text-align: center;
`
export const SubTitleSmall = styled.Text`
  ${({theme}) => css`
  font-size: ${theme.FONT_SIZE.BODY_SM}px;
  font-family: ${theme.FONT_FAMILY.REGULAR};
  color: ${theme.COLORS.gray_200};
  `}
  text-align: center;
`