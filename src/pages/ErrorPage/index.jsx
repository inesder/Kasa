import colors from '../../utils/style/colors'
import styled from 'styled-components';
import { StyledLink } from '../../utils/style/Atoms'

const ErrorContainer = styled.div`
color: ${colors.primary};
display:flex;
flex-direction: column;
align-items:center;
`

const ErrorTitle= styled.h2`
font-size: 288px;
margin:0;
`

const ErrorMessage = styled.p`
font-size: 36px;
margin-bottom: 180px;
`

function ErrorPage() {
return(
    <ErrorContainer>

    <ErrorTitle>404</ErrorTitle>
    <ErrorMessage>Oups! La page que vous demandez n'existe pas.</ErrorMessage>
    
    <StyledLink to={'/'}> Retourner à la page d'accueil </StyledLink>
    </ErrorContainer>
)
}

export default ErrorPage;