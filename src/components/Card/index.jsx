import styled from "styled-components";
import { FaRegHeart, FaHeart  } from "react-icons/fa";

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
    }
`
const ContainerImage = styled.div`
        width: 100%;
        height: 400px;
        background-image: ${props => `url(${props.$capa})`};
        background-repeat: no-repeat;
        background-size: cover;
`

const Card = ({titulo, capa}) => {
    return <CardStyles>
            <ContainerImage className="img" $capa={capa}>

            </ContainerImage>
            <div className="texto">
                <h3>{titulo}</h3> 
                <FaRegHeart color="white" fontSize="24"/> 
            </div>
            </CardStyles>
        
        
}

export default Card