import styled, { css } from 'styled-components/native';

type InfoFoodsProps = 'industrialized' | 'healthy' | string

type InfoFoodsStypesProps = {
  withinTheDiet: InfoFoodsProps
}

export const Container = styled.View`
  flex: 1;
  top: -100px;
  border-radius: 20px;
  padding: 40px 24px;
  background-color: ${({theme}) => theme.COLORS.white};
`
export const Title = styled.Text`
  ${({theme}) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.TITLE_SM}px;
    color: ${theme.COLORS.gray_100};
    line-height: 24px;
  `}
  
`
export const Description = styled.Text`
  ${({theme}) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.BODY_SM}px;
    color: ${theme.COLORS.gray_200};
  `}
  
`
export const TitleTime = styled.Text`
  ${({theme}) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.TITLE_XS}px;
    color: ${theme.COLORS.gray_100};
    line-height: 24px;
  `}
  margin-top: 24px;
`
export const Time = styled.Text`
  ${({theme}) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.BODY_SM}px;
    color: ${theme.COLORS.gray_200};
  `}
`
export const TagFood = styled.View`
  flex-direction: row;
  gap: 8px;

  margin-top: 24px;
  background-color: ${({theme}) => theme.COLORS.gray_600};
  max-width: 144px;
  padding: 8px 16px;
  border-radius: 9999px;

  justify-content: center;
  align-items: center;

`
export const Tag = styled.View<InfoFoodsStypesProps>`
  height: 8px;
  width: 8px;
  border-radius: 9999px;


  background-color: ${({theme, withinTheDiet}) => 
                    withinTheDiet === 'healthy' ? theme.COLORS.green_dark 
                    : theme.COLORS.red_dark };
`

export const TextTag = styled.Text`

`
