import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';
import FeatherIcon  from '@expo/vector-icons/Feather'


export const ButtonContainer = styled(TouchableOpacity)`
  flex-direction: row;
  gap: 12px;

  width: 100%;
  height: 50px;
  background-color: ${({theme}) => theme.COLORS.gray_200};
  border-radius: 6px;

  justify-content: center;
  align-items: center;
`
export const TextButton = styled.Text`
${({ theme }) => css`
  font-family: ${theme.FONT_FAMILY.BOLD};
  font-size: ${theme.FONT_SIZE.BODY_SM}px;
  color: ${theme.COLORS.white};
`}
`
