import styled from 'styled-components'
import HomeIllustration from '../../assets/home_illustration.png'
import annonces from '../../data/annonces.json'
import Card from '../../components/Card'
import colors from '../../utils/style/colors'
import { Banner } from '../../utils/style/Atoms'

const IllustrationContainer = styled.div`
  position: relative;
`

const StyledTitle = styled.h1`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 48px;
  text-align: center;
  font-weight: 700;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  @media screen and (max-width: 768px) {
    text-align: left;
    left:33%;
    width:56%;
    font-size: 35px;
  }

`

const CardContainer = styled.div`
display: flex;
flex-wrap: wrap;
gap: 70px;
justify-content: center;
background-color: ${colors.backgroundLight};
border-radius: 30px;
margin-top: 40px;
padding: 50px;
@media screen and (max-width: 768px) {
  padding: 0;
}
`

function Home() {
  return (
    <div>
      <IllustrationContainer>
        <Banner src={HomeIllustration} />
        <StyledTitle>Chez vous, partout et ailleurs</StyledTitle>
      </IllustrationContainer>
      <CardContainer>
        {annonces.map((annonce) => (
          <Card
            key={annonce.id}
            label={annonce.title}
            cover={annonce.cover}
            id={annonce.id}
          />
        ))}
      </CardContainer>
    </div>
  )
}

export default Home
