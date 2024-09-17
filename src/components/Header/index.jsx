import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { StyledLink } from '../../utils/style/Atoms'
import Logo from '../../assets/LOGO.svg'

const HomeLogo = styled.img`
  height: 70px;
  @media screen and (max-width: 768px) {
    height:30px
  }
`

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 60px;

`

const NavLinks = styled(StyledLink)`
  padding-left: 40px;
  @media screen and (max-width: 768px) {
    font-size: 17px;
  }
`

function Header() {
  return (
    <NavContainer>
      <Link to="/">
        <HomeLogo src={Logo} />
      </Link>
      <div>
        <NavLinks to="/">Accueil</NavLinks>
        <NavLinks to="/about">A propos</NavLinks>
      </div>
    </NavContainer>
  )
}

export default Header
