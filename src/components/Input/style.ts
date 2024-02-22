import styled, { css } from 'styled-components/native'

export type inputStylesProps = 'small' | 'medium' | 'large'

type Props = {
  type: inputStylesProps
}

export const Container = styled.View<Props>`
  flex: ${({type}) => type === 'small' ? 1 : 'none'}
`

export const InputContent = styled.TextInput.attrs<Props>(({theme}) => ({
  placeholderTextColor: theme.COLORS.gray_100,
  color: theme.COLORS.gray_100,
}))`
  height: ${({type}) => type === 'large' ? 120 : 48}px;
  border: 1px solid ${({theme}) => theme.COLORS.gray_500};
  border-radius: 6px;
  padding: 14px;
  font-size: ${({theme}) => theme.FONT_SIZE.BODY_MD}px;
 
  `

export const TextLabel = styled.Text`
  ${({theme}) => css`
  font-family: ${theme.FONT_FAMILY.BOLD};
  font-size: ${theme.FONT_SIZE.TITLE_XS}px;
  color: ${theme.COLORS.gray_200};
`
}
  line-height: 18.2px;
  margin-bottom: 4px;
`