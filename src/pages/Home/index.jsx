import styled from 'styled-components'
import HomeIllustration from '../../assets/home_illustration.png'
import annonces from '../../data/annonces.json'
import Card from '../../components/Card'
import colors from '../../utils/style/colors'


const IllustrationContainer = styled.div`
  position: relative;
`

const Illustration = styled.img`
  object-fit: cover;
  width: 100%;
  height: 223px;
  border-radius: 25px;
  filter: brightness(0.7);
`

const StyledTitle = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 48px;
  text-align: center;
  font-weight: 500;
`

const CardContainer = styled.div`
display: grid;
  gap: 30px;
  grid-template-rows: 350px 350px;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-items: center;
  background-color: ${colors.backgroundLight};
  border-radius: 30px;
  margin-top: 40px;
  padding-top: 50px;
`

function Home() {
  return (
    <div>
    <IllustrationContainer>
      <Illustration src={HomeIllustration} />
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
