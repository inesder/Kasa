import styled from 'styled-components'
import { Link } from 'react-router-dom'

const CardWrapper = styled.div`
  width: 340px;
  height: 340px;
  position: relative;
  border-radius: 10px;
  transition: 250ms;
  &:hover {
    box-shadow: 5px 5px 10px grey;
    transform: scale(1.02);
  }
  &::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.6) 0%,
      rgba(0, 0, 0, 0) 50%
    );
    z-index: 1;
    border-radius: 10px;
    pointer-events: none;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`
const CardImage = styled.img`
  border-radius: 10px;
  width: 340px;
  height: 340px;
  object-fit: cover;
  z-index: 0;
  @media screen and (max-width: 768px) {
    width:100%
  }
`
const TitleContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  color: white;
  padding: 10px;
  border-bottom-left-radius: 10px;
  font-size: 18px;
  z-index: 2;
`

const CardLabel = styled.h3``

function Card({ label, cover, id }) {
  return (
    <CardWrapper>
      <Link to={`/housing/${id}`}>
        <TitleContainer>
          <CardLabel>{label}</CardLabel>
        </TitleContainer>
        <CardImage src={cover} alt="housing-image" />
      </Link>
    </CardWrapper>
  )
}

export default Card
