import styled from 'styled-components'
import footer_logo from '../../assets/footer_logo.png'

const FooterBackground = styled.div`
background-color:black;
width: 100%;
height:210px;
margin-top: 100px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`

const FooterLogo = styled.img`
width: 120px;
height: 39px;
`

const CopyRight = styled.p`
color: white;
padding-top: 20px;
font-size: 18px;
`

function Footer() {
    return (
        <FooterBackground>
            <FooterLogo
            src={footer_logo} alt='logo' />
            <CopyRight>© 2020 Kasa. All rights reserved</CopyRight>
        </FooterBackground>
    )
}

export default Footer