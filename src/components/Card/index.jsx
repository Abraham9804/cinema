import styled from "styled-components";
import { FaRegHeart, FaHeart  } from "react-icons/fa";
import { useFavoritoContexto } from "../../Contexto/Contexto";
import { Link } from "react-router-dom";

const CardStyles = styled.article`
    width: 281px;
    height: 501px;

    .texto{
        width: 100%;
        height: 101px;
        background-color: black;
        color: var(--blanco);
        padding: 7px 10px;
        h3{
            font-size: 18px;
            padding-bottom: 10px;
        }

        img{
            padding: 0px 10px;
        }

        a{
            color: white;
        }
    }
`
const ContainerImage = styled.div`
        width: 100%;
        height: 400px;
        background-image: ${props => `url(${props.$capa})`};
        background-repeat: no-repeat;
        background-size: cover;
`

const Card = ({id, titulo, capa}) => {

    const {favorito, agregarFavorito} = useFavoritoContexto();
    const isFavorito = favorito.some(fav => fav.id === id)
    const Icon = isFavorito ? FaHeart : FaRegHeart

    return <CardStyles>
            <Link to={`/${id}`}>
                <ContainerImage className="img" $capa={capa} />
            </Link>
                <div className="texto">
                    <Link to={`/${id}`}>
                        <h3>{titulo}</h3>
                    </Link>
                    <Icon color="white" fontSize="24" onClick={()=>agregarFavorito({id, titulo, capa})}/> 
                </div>
            
            
            </CardStyles>
        
        
}

export default Card