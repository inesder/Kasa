import styled from 'styled-components'
import { FaStar } from 'react-icons/fa'

const StarIcon = styled.div`
  color: ${(props) => (props.$filled === 'true' ? '#FF6060' : '#F6F6F6')};
  padding: 5px;
  border-radius: 50%;
  display: inline-flex;
  font-size: 26px;
`

function Star({ filled }) {
  return (
    <StarIcon $filled={filled ? 'true' : 'false'}>
      <FaStar />
    </StarIcon>
  )
}

function StarRating({ rating }) {

  //Determiner le nombre d'étoiles pleines à afficher et arrondit la valeur de rating
  const fullStars = Math.floor(rating)

  //Creation du tableau star
  const stars = []

   // Nous remplissons le tableau `stars` avec le nombre correct d'étoiles pleines.
  for (let i = 0; i < fullStars; i++) {
    stars.push(<Star key={`star-full-${i}`} filled="true" />)
  }


  // Calcul du nombre d'étoiles vides à afficher.
  const remainingStars = 5 - fullStars
  
  // Ajout le nombre correct d'étoiles vides au tableau `stars`.
  for (let i = 0; i < remainingStars; i++) {
    stars.push(<Star key={`star-empty-${i}`} />)
  }

  // Retour de la div contenant toutes les étoiles.
  return <div>{stars}</div>
}

export default StarRating
