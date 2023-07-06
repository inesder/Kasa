import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from './colors'

export const StyledLink = styled(Link)`
  padding: 10px 15px;
  color: ${colors.primary};
  text-decoration: none;
  font-size: 24px;
  font-weight: 500;
  text-align: center;
  &:hover{
    text-decoration: underline;
  }
  ${(props) =>
    props.$isFullLink &&
    `color: white; 
    border-radius: 30px; 
    background-color: ${colors.primary};`}
`