import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex:1;
  width: 100%;
  padding: 33px 24px;
  align-items: center;
  gap: 12px;

  border-top-right-radius: 20px;
  border-top-left-radius: 20px;

  top: -33px;
  background-color: ${({theme}) => theme.COLORS.gray_700};
`

export const TitleStatistics = styled.Text`
  ${({theme}) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.TITLE_XS}px;
    color: ${theme.COLORS.gray_100};
  `}
  margin-bottom: 11px;
`
export const ContainerFood = styled.View`
  flex-direction: row;
  gap: 12px;
`