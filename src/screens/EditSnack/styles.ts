import { SafeAreaView } from 'react-native-safe-area-context'
import styled, { css } from 'styled-components/native'

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({theme}) => theme.COLORS.white};
`
export const FormData = styled.View`
  gap: 24px;
  flex: 1;
  background-color: ${({theme}) => theme.COLORS.white};
  top: -24px;
  padding: 40px 24px 0px 24px ;

  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
`
export const ContentForm = styled.View`
  gap: 8px;
  flex-direction: row;
  justify-content: center; 
`
export const ContentButton = styled.View`
  padding: 0px 24px 40px;
`