import styled,{ css }  from 'styled-components/native';

export type ButtonDietStylesProps = 'industrialized' | 'healthy' 
export type isSelectedProps =  'industrialized' | 'healthy' 

type Props = {
  type: ButtonDietStylesProps
  isSelected: isSelectedProps
}

export const Container = styled.View<Props>`
  flex: 1;
  height: 50px;
  border-radius: 6px;
  justify-content: center;
  align-items: center;
  /* background-color: ${({isSelectedProps, theme}) => isSelectedProps === 'Sim' ? theme.COLORS.green_light: theme.COLORS.red_light}; */
  background-color: ${({theme}) =>  theme.COLORS.gray_500}; 
`
export const Content = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;

  gap: 8px;
`
export const TextType = styled.Text`
  ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.TITLE_XS}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.gray_100};
  `}
`
export const IconStyle = styled.View<Props>`
  height: 8px;
  width: 8px;
  background-color: ${({type, theme}) =>type === 'healthy' ? theme.COLORS.green_dark : theme.COLORS.red_dark };

  border-radius: 9999px;

`