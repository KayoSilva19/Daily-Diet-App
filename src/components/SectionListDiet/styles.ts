import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  width: 100%; 
  margin-top: 40px;
`
export const HeaderSection = styled.View`
  gap: 8px;
`

export const Subtitle = styled.Text`
${({theme}) => css`
  font-family: ${theme.FONT_FAMILY.REGULAR};
  font-size: ${theme.FONT_SIZE.BODY_MD}px;
  color: ${theme.COLORS.gray_100};
`}`

export const TextSectionList = styled.Text`
${({theme}) => css`
  font-family: ${theme.FONT_FAMILY.BOLD};
  font-size: ${theme.FONT_SIZE.TITLE_SM}px;
  color: ${theme.COLORS.gray_100};
`}
  margin-bottom: 8px;
`