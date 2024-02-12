import { BodyHome, Container, HeaderHome, ImageUser, Logo,  } from './styles'

import { CardPercentageDiet } from '@components/CardPercentageDiet'
import { SectionListDiet } from '@components/SectionListDiet'

import imageLogo from '@assets/logo.png'

export function Home() {
  const API_GITHUB_IMAGE = 'https://github.com/KayoSilva19.png'
  return (
    <Container>
      <HeaderHome>
        <Logo source={imageLogo}/>
        <ImageUser source={{ uri: API_GITHUB_IMAGE}}/>
      </HeaderHome>

      <BodyHome>
        <CardPercentageDiet 
          percentage="30,21%" 
          withinTheDiet={false}
        />
        <SectionListDiet />
      </BodyHome>
    </Container>
  )
}