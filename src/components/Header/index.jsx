import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { StyledLink } from '../../utils/style/Atoms'
import Logo from '../../assets/LOGO.svg'

const HomeLogo = styled.img`
  height: 70px;
`

const NavContainer = styled.nav`

  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 60px;
`

function Header() {
  return (
    <NavContainer>
      <Link to="/">
        <HomeLogo src={Logo} />
      </Link>
      <div>
        <StyledLink to="/">Accueil</StyledLink>
        <StyledLink to="/about">A propos</StyledLink>
      </div>
    </NavContainer>
  )
}

export default Header