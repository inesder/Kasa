import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const StyledLink = styled(Link)`
  padding: 10px 15px;
  color: black;
  text-decoration: none;
  font-size: 24px;
  font-weight: 500;
  text-align: center;
  &:hover {
    text-decoration: underline;
  }
`

export const Banner = styled.img`
  object-fit: cover;
  width: 100%;
  height: 223px;
  border-radius: 25px;
  filter: brightness(0.5);
  
`
