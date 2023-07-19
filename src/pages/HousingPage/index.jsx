import annonces from '../../data/annonces.json'
import styled from 'styled-components'
import { useParams, useNavigate } from 'react-router-dom'
import colors from '../../utils/style/colors'
import StarRating from '../../components/StarRating'
import Collapsible from '../../components/Collapsible'
import Tag from '../../components/Tag'
import Carousel from '../../components/Carousel'
import { useEffect } from 'react'

const StyledCarousel = styled.div`
  .carousel-image {
    width: 100%;
    height: 415px;
    object-fit: cover;
    border-radius: 25px;
  }
`
const PropertyContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
  
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

const OwnerProfile = styled.div`
  display: flex;
  gap: 50px;
  align-items: end;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    flex-direction: row-reverse;
    justify-content: left;
    justify-content: space-between;
    align-items: center;
  }
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
  @media screen and (max-width: 768px) {
   flex-direction: column;
   gap: 20px;
  }
`
const CollapseMenu = styled.div`
  overflow: hidden;
  width: 45%;
  @media screen and (max-width: 768px) {
    width: 100%
   }
`

const StyledEquipment = styled.p`
  margin: 0;
`

function HousingPage() {
  const { id } = useParams()
  const navigate = useNavigate()

  const apartment = annonces.find((annonce) => annonce.id === id)

  useEffect(() => {
    if (!apartment) {
      navigate('/error')
    }
  }, [apartment, navigate])

  if (!apartment) {
    return null
  }

  const {
    title,
    location,
    tags,
    rating,
    host: { name, picture },
    description,
    equipments,
    pictures,
  } = apartment

  return (
    <div>
      <StyledCarousel>
        <Carousel images={pictures} />
      </StyledCarousel>
      <PropertyContainer>
        <div>
          <StyledTitle>{title}</StyledTitle>
          <StyledLocation>{location}</StyledLocation>
          <StyledTagContainer>
            {tags.map((tag, index) => (
              <Tag key={index} tag={tag} />
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
      <CollapsibleContainer>
        <CollapseMenu>
          <Collapsible title="Description">
            <p>{description}</p>
          </Collapsible>
        </CollapseMenu>
        <CollapseMenu>
          <Collapsible title="Equipements">
            <CollapseMenu>
              {equipments.map((equipment, index) => (
                <StyledEquipment key={index}>{equipment}</StyledEquipment>
              ))}
            </CollapseMenu>
          </Collapsible>
        </CollapseMenu>
      </CollapsibleContainer>
    </div>
  )
}

export default HousingPage
