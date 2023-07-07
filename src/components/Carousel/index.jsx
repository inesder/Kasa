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
const CarouselCounter = styled.div`
  position: absolute;
  bottom: 10px;
  left: 50%;
  color: white;
  font-size: 25px;
  z-index: 1;
  font-weight: 500;
`

function Carousel({ images }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const handlePrevious = () => {
    const newIndex = currentImageIndex - 1
    setCurrentImageIndex(newIndex < 0 ? images.length - 1 : newIndex)
  }

  const handleNext = () => {
    const newIndex = currentImageIndex + 1
    setCurrentImageIndex(newIndex >= images.length ? 0 : newIndex)
  }

  return (
    <CarouselContainer>
      <PreviousButton onClick={handlePrevious}>
        <img src={PreviousImage} alt="Previous" />
      </PreviousButton>
      <img
        className="carousel-image"
        src={images[currentImageIndex]}
        alt={`Apartment interior ${currentImageIndex}`}
      />
      <NextButton onClick={handleNext}>
        <img src={NextImage} alt="Next" />
      </NextButton>
      <CarouselCounter>{`${currentImageIndex + 1}/${
        images.length
      }`}</CarouselCounter>
    </CarouselContainer>
  )
}

export default Carousel
