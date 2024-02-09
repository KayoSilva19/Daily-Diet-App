import { View, Text } from 'react-native'
import { BodyHome, Container, HeaderHome, ImageUser, Logo, } from './styles'
import imageLogo from '@assets/logo.png'
import CardPercentageDiet from '@components/CardPercentageDiet'

export function Home() {
  const API_GITHUB_IMAGE = 'https://github.com/KayoSilva19.png'
  return (
    <Container>
      <HeaderHome>
        <Logo source={imageLogo}/>
        <ImageUser source={{ uri: API_GITHUB_IMAGE}}/>
      </HeaderHome>

      <BodyHome>
        <CardPercentageDiet percentage={10}/>
      </BodyHome>
    </Container>
  )
}