import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';
import FeatherIcon  from '@expo/vector-icons/Feather'

export type CardStylePercentageDietProps = boolean

type Props = {
  withinTheDiet: CardStylePercentageDietProps
}

export const Container = styled(TouchableOpacity) <Props>`
  width: 100%; 
  height: 102px;
  margin-top: 36px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;

  position: relative;

  background-color: ${({theme, withinTheDiet}) => withinTheDiet ? theme.COLORS.green_light : theme.COLORS.red_light };
`
export const TextPercentage = styled.Text`
${({theme}) => css`
  font-family: ${theme.FONT_FAMILY.BOLD};
  font-size: ${theme.FONT_SIZE.TITLE_LG}px;
  color: ${theme.COLORS.gray_100};
`}`

export const SubTitle = styled.Text`
${({theme}) => css`
  font-family: ${theme.FONT_FAMILY.REGULAR};
  font-size: ${theme.FONT_SIZE.BODY_SM}px;
  color: ${theme.COLORS.gray_200};
`}
`
export const ArrowUpCard = styled(FeatherIcon).attrs<Props>(({ theme, withinTheDiet }) => ({
  size: 24,
  color: withinTheDiet ? theme.COLORS.green_dark : theme.COLORS.red_dark,
}))`
  position: absolute;
  top: 8px;
  right: 8px;
`