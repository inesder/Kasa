import styled from 'styled-components'
import { Link } from 'react-router-dom';


const CardWrapper = styled.div`
width:340px;
height:340px;
position: relative;
border-radius: 10px;
transition: 250ms;
&:hover{
    box-shadow: 5px 5px 10px grey;
    transform: scale(1.02);
}

`
const CardImage = styled.img`
border-radius: 10px;
width:340px;
height:340px;
object-fit: cover;

`
const TitleContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  color: white;
  padding: 10px;
  border-bottom-left-radius: 10px;
  font-size: 18px;
`;


const CardLabel= styled.h3`
`


function Card({label, cover, id}) {
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