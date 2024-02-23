import { ReactNode } from "react"
import { TouchableOpacityProps } from "react-native"
import { ButtonDietStylesProps, Container, Content, IconStyle, TextType, isSelectedProps } from "./styles"

type ButtonDietProps = TouchableOpacityProps & {
  children: ReactNode
  type: ButtonDietStylesProps
  isSelected: isSelectedProps
}

type IconProps = {
  type: ButtonDietStylesProps
}

function ButtonDiet({ children, isSelected }:ButtonDietProps ) {
  return (
    <Container isSelected={isSelected}>
      { children }
    </Container>
  )
}

function IconDiet({ type = 'healthy' }:IconProps ) {
  return (
    <Content>
      <IconStyle type={type}/>
      <TextType>{type === 'healthy' ? 'Sim' : 'Não'}</TextType>
    </Content>
  )
}


ButtonDiet.Icon = IconDiet

export { ButtonDiet }