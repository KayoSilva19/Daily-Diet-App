import { TextInputProps } from 'react-native';
import { Container, InputContent, TextLabel, inputStylesProps } from './style';

type InputProps = TextInputProps &{
  type: inputStylesProps
  nameInput?: string,
  title: string
}

export function Input({ type = 'medium', nameInput, title}: InputProps) {
  return (
    <Container type={type}>
      <TextLabel>{title}</TextLabel>
      <InputContent    
        multiline
        textAlignVertical="top" 
        type={type} 
        placeholder={nameInput} 
      />
    </Container>
  )
}