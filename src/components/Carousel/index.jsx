import React, { useState } from 'react'
import styled from 'styled-components'
import NextImage from '../../assets/next.png'
import PreviousImage from '../../assets/previous.png'

const CarouselContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const CarouselButton = styled.button`
  background-color: transparent;
  border: none;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  cursor: pointer;
  
`

const PreviousButton = styled(CarouselButton)`
  left: 10px;
  
`

const NextButton = styled(CarouselButton)`
  right: 10px;
`
const ArrowImg = styled.img`

@media screen and (max-width: 768px) {
    width: 18px;
  }

`
  
const CarouselCounter = styled.div`
  position: absolute;
  bottom: 10px;
  left: 50%;
  color: white;
  font-size: 25px;
  z-index: 1;
  font-weight: 500;
  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`

function Carousel({ images }) {
  // Utilisation du hook useState pour gérer l'image actuelle affichée
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Définition de la fonction pour aller à l'image précédente
  const handlePrevious = () => {
    const newIndex = currentImageIndex - 1
    setCurrentImageIndex(newIndex < 0 ? images.length - 1 : newIndex)
  }

    // Définition de la fonction pour aller à l'image suivante
  const handleNext = () => {
    const newIndex = currentImageIndex + 1
    setCurrentImageIndex(newIndex >= images.length ? 0 : newIndex)
  }

  return (
    <CarouselContainer>
      {/* Bouton pour aller à l'image précédente */}
      <PreviousButton onClick={handlePrevious}>
        <ArrowImg src={PreviousImage} alt="Previous" />
      </PreviousButton>
      <img
        className="carousel-image"
        src={images[currentImageIndex]}
        alt={`Apartment interior ${currentImageIndex}`}
      />
      {/* Bouton pour aller à l'image suivante */}
      <NextButton onClick={handleNext}>
        <ArrowImg src={NextImage} alt="Next" />
      </NextButton>
      {/* Le compteur de position de l'image actuelle */}
      <CarouselCounter>{`${currentImageIndex + 1}/${
        images.length
      }`}</CarouselCounter>
    </CarouselContainer>
  )
}

export default Carousel
