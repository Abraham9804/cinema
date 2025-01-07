import styled from "styled-components"
import Banner from "../../components/Banner"
import Titulo from "../../components/Titulo"
import { useFavoritoContexto } from "../../Contexto/Contexto"
import Card from "../../components/Card"


const CardContainer = styled.section`
    width: 100%;
    height: 50vh;
    margin: auto;
    margin-bottom: 200px;
    display: flex;
    justify-content: center;
    gap: 17px;
`

const Favoritos = () => {
    const {favorito} = useFavoritoContexto();
    return  <>
            <Banner img="/img/banner-favoritos.png" color="#00BF63"></Banner>
                    <Titulo>
                        <h1>Favoritos</h1>
                    </Titulo>
                <CardContainer>
                    {favorito.map(fav => {
                        return <Card {...fav} key={fav.id} >

                        </Card>
                    })}
                </CardContainer>
            </>
        
                

            
        
}

export default Favoritos