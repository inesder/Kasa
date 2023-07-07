import styled from 'styled-components'
import { FaStar } from 'react-icons/fa'

const StarIcon = styled.div`
  color: ${(props) => (props.filled ? '#FF6060' : '#F6F6F6')};
  padding: 5px;
  border-radius: 50%;
  display: inline-flex;
  font-size: 26px;
`

function Star({ filled }) {
  return (
    <StarIcon filled={filled}>
      <FaStar />
    </StarIcon>
  )
}

function StarRating({ rating }) {
  const fullStars = Math.floor(rating)

  const stars = []

  for (let i = 0; i < fullStars; i++) {
    stars.push(<Star key={`star-full-${i}`} filled />)
  }

  const remainingStars = 5 - fullStars

  for (let i = 0; i < remainingStars; i++) {
    stars.push(<Star key={`star-empty-${i}`} />)
  }

  return <div>{stars}</div>
}

export default StarRating
