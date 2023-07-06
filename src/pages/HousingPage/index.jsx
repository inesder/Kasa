import annonces from '../../data/annonces.json'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import colors from '../../utils/style/colors'
import StarRating from '../../components/StarRating'
import Collapsible from '../../components/Collapsible'

const HouseImage = styled.img`
  width: 100%;
  height: 415px;
  object-fit: cover;
  border-radius: 25px;
`
const PropertyContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`

const StyledTitle = styled.h2`
  color: ${colors.primary};
  font-size: 36px;
  font-weight: 500;
  margin: 0;
`

const StyledLocation = styled.p`
  color: ${colors.primary};
  font-size: 18px;
`

const StyledTagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`

const StyledTag = styled.p`
  background-color: ${colors.primary};
  color: white;
  border-radius: 15px;
  font-size: 16px;
  padding: 5px 25px;
`
const OwnerProfile = styled.div`
  display: flex;
  gap: 50px;
  align-items: end;
  flex-direction: column;
`
const OwnerInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`

const StyledName = styled.p`
  color: ${colors.primary};
  font-size: 18px;
`

const OwnerPicture = styled.img`
  border-radius: 100px;
  height: 64px;
  object-fit: cover;
`

const CollapsibleContainer = styled.div`
display: flex;
justify-content: space-between;
margin-top: 20px;
`
const CollapseMenu = styled.div`
  overflow: hidden;
  width: 45%;
  `

const StyledEquipment= styled.p`
margin:0;`

function HousingPage() {
  const { id } = useParams()
  const apartment = annonces.find((annonce) => annonce.id === id)
  const {
    cover,
    title,
    location,
    tags,
    rating,
    host: { name, picture },
    description,
    equipments,
  } = apartment

  return (
    <div>
      <HouseImage src={cover} alt={title}></HouseImage>
      <PropertyContainer>
        <div>
          <StyledTitle>{title}</StyledTitle>
          <StyledLocation>{location}</StyledLocation>
          <StyledTagContainer>
            {tags.map((tag) => (
              <StyledTag>{tag}</StyledTag>
            ))}
          </StyledTagContainer>
        </div>
        <div>
          <OwnerProfile>
            <OwnerInfo>
              <StyledName>{name}</StyledName>
              <OwnerPicture src={picture} />
            </OwnerInfo>
            <StarRating rating={rating} />
          </OwnerProfile>
        </div>
      </PropertyContainer>
      <CollapsibleContainer><CollapseMenu>
      <Collapsible title='Description'>
        
      <p>{description}</p>
      </Collapsible></CollapseMenu>
      <CollapseMenu>
      <Collapsible title='Equipements'>
      <CollapseMenu>
        {equipments.map((equipment)=> (
            <StyledEquipment>{equipment}</StyledEquipment>
        ))}
        </CollapseMenu>
      </Collapsible></CollapseMenu>
      </CollapsibleContainer>
    </div>
  )
}

export default HousingPage
