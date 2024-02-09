import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

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

  background-color: ${({theme, withinTheDiet}) => withinTheDiet ? theme.COLORS.green_light : theme.COLORS.red_light };
`
export const TextPercentage = styled.Text`
${({theme}) => css`
  font-family: ${theme.FONT_FAMILY.BOLD};
  font-size: ${theme.FONT_SIZE.TITLE_LG}px;
`}
  
`
export const TextInfoDiet = styled.Text`
`