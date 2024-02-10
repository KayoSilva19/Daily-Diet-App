
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  padding: 24px;
 
`
export const HeaderHome = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
export const Logo = styled.Image`
  width: 80px;
  height: 40px;
  `
export const ImageUser = styled.Image`
 width: 40px;
 height: 40px;
 border-radius: 50px;
 border-width: 2px;
 border-color: ${({theme}) => theme.COLORS.gray_200};
 `
 export const BodyHome = styled.View`
  flex: 1;  
 `

