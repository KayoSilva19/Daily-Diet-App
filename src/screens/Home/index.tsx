import { View, Text } from 'react-native'
import { Container, HeaderHome, ImageUser, Logo, } from './styles'
import imageLogo from '@assets/logo.png'

export function Home() {
  const API_GITHUB_IMAGE = 'https://github.com/KayoSilva19.png'
  return (
    <Container>
      <HeaderHome>
        <Logo source={imageLogo}/>
        <ImageUser source={{ uri: API_GITHUB_IMAGE}}/>
      </HeaderHome>
    </Container>
  )
}