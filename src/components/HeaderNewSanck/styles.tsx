import FeatherIcon from '@expo/vector-icons/Feather'
import { TouchableOpacity } from 'react-native'
import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  height: 132px;
  background-color: ${({theme}) => theme.COLORS.gray_500};
  
  padding: 0px 24px;
  
  justify-content: center;
  align-items: center;
  flex-direction: row;
  
  position: relative;
  
  `


export const TextHeader = styled.Text`
 ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.TITLE_SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.gray_100};
 `};

`
export const ButtonBack = styled(TouchableOpacity)`
  position: absolute;
  left: 24px;
`
export const Icon = styled(FeatherIcon).attrs(({theme}) => ({
  size: 24,
  color: theme.COLORS.gray_200,
}))``
