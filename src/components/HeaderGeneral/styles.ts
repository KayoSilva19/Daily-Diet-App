import FeatherIcon  from '@expo/vector-icons/Feather'
import styled, { css } from 'styled-components/native';

export type HeaderStylesProps = 'industrialized' | 'healthy' | string

type Props = {
  headerInfo?: boolean
  withinTheDiet?: HeaderStylesProps
}

export const Container = styled.View<Props>`
  position: relative;
  width: 100%;
  height: 200px;
  
  align-items: center;
  justify-content: ${({headerInfo}) => headerInfo === true ? 'none' : 'center'};

  padding: 50px 24px;

  background-color: ${({ theme, withinTheDiet }) => withinTheDiet === 'healthy'
  ? theme.COLORS.green_light 
  : theme.COLORS.red_light }; 
`;


export const Title = styled.Text<Props>`
  ${({theme, headerInfo}) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${headerInfo === true ? theme.FONT_SIZE.TITLE_SM : theme.FONT_SIZE.TITLE_LG}px;
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


export const BackButton = styled.TouchableOpacity<Props>`
  position: absolute;
  top: ${({headerInfo}) => headerInfo === true ? 50 : 24 }px;
  left: 24px;
`;

export const BackIcon = styled(FeatherIcon).attrs<Props>(({ theme, withinTheDiet }) => ({
  size: 24,
  color: withinTheDiet === 'healthy' ? theme.COLORS.green_dark : theme.COLORS.red_dark,
}))`

`;


