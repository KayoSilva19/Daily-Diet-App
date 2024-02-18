import FeatherIcon  from '@expo/vector-icons/Feather'
import styled, { css } from 'styled-components/native';

export type HeaderStylesProps = 'industrialized' | 'healthy' | string

type Props = {
  withinTheDiet: HeaderStylesProps
}

export const Container = styled.View<Props>`
  position: relative;
  width: 100%;
  height: 200px;
  
  align-items: center;
  justify-content: center;

  padding: 24px 24px;

  background-color: ${({ theme, withinTheDiet }) => withinTheDiet === 'healthy'
  ? theme.COLORS.green_light 
  : theme.COLORS.red_light }; 
`;


export const Title = styled.Text`
  ${({theme}) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.TITLE_LG}px;
    color: ${theme.COLORS.gray_200};
  `}
`;

export const SubTitle = styled.Text`
${({theme}) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.BODY_SM}px;
    color: ${theme.COLORS.gray_200};
  `}
`;


export const BackButton = styled.TouchableOpacity`
  position: absolute;
  top: 24px;
  left: 24px;
`;

export const BackIcon = styled(FeatherIcon).attrs<Props>(({ theme, withinTheDiet }) => ({
  size: 24,
  color: withinTheDiet === 'healthy' ? theme.COLORS.green_dark : theme.COLORS.red_dark,
}))`

`;


