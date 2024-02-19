import { TouchableOpacity } from 'react-native'
import styled, { css } from 'styled-components/native'

export type ButtonStylesProps = 'Primary' | 'Secondary'

type ButtonProps = {
  type: ButtonStylesProps
}

export const ButtonContainer = styled(TouchableOpacity)<ButtonProps>`
  flex-direction: row;
  gap: 12px;

  width: 100%;
  height: 50px;
  background-color: ${({theme, type}) => type === 'Primary' ? theme.COLORS.gray_200 :theme.COLORS.white };
  border-radius: 6px;

  border-width: 1px;
  border:${({theme, type}) => type === 'Primary' ? 'none' : theme.COLORS.gray_200};

  justify-content: center;
  align-items: center;
`
export const TextButton = styled.Text<ButtonProps>`
${({ theme, type }) => css`
  font-family: ${theme.FONT_FAMILY.BOLD};
  font-size: ${theme.FONT_SIZE.BODY_SM}px;
  color: ${type === 'Primary' ? theme.COLORS.white : theme.COLORS.gray_100};
`}
`
