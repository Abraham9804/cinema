import styled from "styled-components"
import LinkMenu from "../LinkMenu"
import { Link } from "react-router-dom"

const HeaderStyle = styled.header`
    width: 100%;
    height: 100px;
    background-color: var(--negro);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 180px;

    div{
        display: flex;
        align-items: end;
        gap: 7px;
        img{
            width: 75px;
            height: 35px;
        }

        .titulo{
            color: var(--blanco);
            font-size: 27px;
            font-weight: 600;
        }
    }
   
   nav{
        ul{
            display: flex;

            li {
                list-style: none;
                margin: 0px 15px;
                a{
                    color: var(--blanco)
                }
            }
        }      
   }
`

const Header = () => {
    return (
        <HeaderStyle>
            <Link to="/">
                <div>
                    <img src="/img/logo-alura.png" alt="logo Alura"/>
                    <span className="titulo">CINEMA</span>
                </div>
            </Link>
            
            <nav>
                <ul>
                    <li>
                        <LinkMenu url="/"> Home </LinkMenu>
                    </li>
                    <li>
                        <LinkMenu url="/favoritos"> Favoritos </LinkMenu>
                    </li>
                </ul>
            </nav>  
        </HeaderStyle>
    )
}

export default Header