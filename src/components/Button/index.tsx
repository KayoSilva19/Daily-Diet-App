import { ReactNode } from 'react';
import { 
  ButtonContainer, ButtonStylesProps, TextButton, 
} from './styles';
import { TouchableOpacityProps } from 'react-native';

type ButtonProps = TouchableOpacityProps & {
  children: ReactNode
  type?: ButtonStylesProps
}

type ButtonTextProps = {
  children: ReactNode;
  type?: ButtonStylesProps
}

type ButtonIconProps = {
  children: ReactNode;
}

function Button({ type = 'Primary', children, ...rest }: ButtonProps) {
  return (
    <ButtonContainer type={type} {...rest} activeOpacity={0.7}>
      {children}
    </ButtonContainer>
  )
}

function ButtonText({ type = 'Primary', children }:ButtonTextProps) {
  return (
    <TextButton type={type}>{children}</TextButton>
  )
}

function ButtonIcon({ children }:ButtonIconProps) {
  return children
}

Button.Text = ButtonText
Button.Icon = ButtonIcon

export { Button }