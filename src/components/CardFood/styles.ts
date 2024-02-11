import { Pressable } from 'react-native';
import styled, { css } from 'styled-components/native';

export type CardStylesFoodStatusProps = 'healthy' | 'industrialized'

type Props = {
  type: CardStylesFoodStatusProps 
}

export const Container = styled(Pressable)`
  flex-direction: row;
  align-items: center;
  gap: 12px;

  width: 100%;

  border-width: 1px;
  border-color: ${({theme}) => theme.COLORS.gray_500};
  border-radius: 6px;

  padding: 16px 12px;
  margin-bottom: 16px;
     
`
export const TimeText = styled.Text`
${({theme}) => css`
  font-size: ${({ theme }) => theme.FONT_SIZE.BODY_XS}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.gray_100};

`}
    line-height: 18px; 
`
export const FoodContent = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  flex:1;
  border-left-width: 1px;
  border-color: ${({ theme }) => theme.COLORS.gray_400};
  padding-left: 12px;
`
export const FoodText = styled.Text`
${({theme}) => css`
  font-size: ${({ theme }) => theme.FONT_SIZE.BODY_MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.gray_200};

`}
  text-align: center;
  line-height: 20px;  
`
export const FoodStatus = styled.Text<Props>`
  height: 14px;
  width: 14px;
  border-radius: 50px;
  text-align: center;

  background-color: ${({ theme, type }) => 
  type === 'healthy' ? theme.COLORS.green_mid 
  : theme.COLORS.red_mid
};
`
