import { ReactNode } from 'react';
import { 
  ButtonContainer, TextButton, 
} from './styles';
import { TouchableOpacityProps } from 'react-native';

type ButtonProps = TouchableOpacityProps & {
  children: ReactNode;
}

type ButtonTextProps = {
  children: ReactNode;
}

type ButtonIconProps = {
  children: ReactNode;
}

function Button({ children, ...rest }: ButtonProps) {
  return (
    <ButtonContainer {...rest} activeOpacity={0.7}>
      {children}
    </ButtonContainer>
  )
}

function ButtonText({ children }:ButtonTextProps) {
  return (
    <TextButton>{children}</TextButton>
  )
}

function ButtonIcon({ children }:ButtonIconProps) {
  return children
}

Button.Text = ButtonText
Button.Icon = ButtonIcon

export { Button }