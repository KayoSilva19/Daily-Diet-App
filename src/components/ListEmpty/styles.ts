import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  width: 100%; 
  margin-top: 32px;

  gap: 8px;
  align-items: center;
  `

export const TextContainer = styled.Text`
${({theme}) => css`
  font-family: ${theme.FONT_FAMILY.REGULAR};
  font-size: ${theme.FONT_SIZE.BODY_SM}px;
  color: ${theme.COLORS.gray_100};
`}
  width: 80%;
  text-align: center;
`