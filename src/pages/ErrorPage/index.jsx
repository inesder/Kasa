import colors from '../../utils/style/colors'
import styled from 'styled-components'
import { StyledLink } from '../../utils/style/Atoms'

const ErrorContainer = styled.div`
  color: ${colors.primary};
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 768px) {
    margin-top: 200px ;
   }
`

const ErrorTitle = styled.h2`
  font-size: 288px;
  margin: 0;
  @media screen and (max-width: 768px) {
    font-size:100px;
   }
`

const ErrorMessage = styled.p`
  font-weight: 500;
  font-size: 36px;
  margin-bottom: 180px;
  @media screen and (max-width: 768px) {
    font-size:25px;
    text-align: center;
    font-weight: 500;
   }

`

function ErrorPage() {
  return (
    <ErrorContainer>
      <ErrorTitle>404</ErrorTitle>
      <ErrorMessage>Oups! La page que vous demandez n'existe pas.</ErrorMessage>

      <StyledLink to={'/'}> Retourner sur la page d'accueil </StyledLink>
    </ErrorContainer>
  )
}

export default ErrorPage
