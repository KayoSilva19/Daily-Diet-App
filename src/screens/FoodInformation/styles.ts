import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'

export const Container = styled(SafeAreaView)`
  flex: 1;
  position: relative;
  background-color: ${({theme}) => theme.COLORS.white};
`
export const ContainerFooter = styled.View`
  /* superior | direita | inferior | esquerda */
  padding: 0 24px 40px 24px;
  gap: 8px;
`
