import { Link } from "react-router-dom";
import styled from "styled-components";

const FooterStyles = styled.footer`
    width: 100%;
    height: 80px;
    background-color: var(--negro);
    display: flex;
    justify-content: center;
    align-items: center;
    
    p{
        color: var(--blanco);
        font-size: 20px;
        font-weight: 600;
    }

    a{
        color: var(--blanco);
    }
`

const Footer = () => {
    return (
        <FooterStyles>
            <p>Desarrollado por Abraham Romero  </p><Link to="https://www.linkedin.com/in/abraham-romero9804/"> <img src="/img/linkedin-logo.png" /></Link>
        </FooterStyles>
    )
}

export default Footer 