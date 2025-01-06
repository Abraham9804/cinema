import styled from "styled-components"
import Banner from "../../components/Banner"
import Card from "../../components/Card"
import Titulo from "../../components/Titulo"
import Videos from "./db.json"

const CardContainer = styled.section`
    width: 100%;
    margin: auto;
    margin-bottom: 200px;
    display: flex;
    justify-content: center;
    gap: 17px;
`

const Inicio = () => {
    return  <>
                <Banner img="/img/banner-home.png" color="#0000FF"></Banner>
                <Titulo>
                    <h1>Un lugar para guardar sus videos favoritos</h1>
                </Titulo>
                <CardContainer>
                    {
                        Videos.map(video => {
                            
                        return  <Card {...video} key={video.id}/>

                            
                        })
                    }
                </CardContainer>
                
                
            </>
    
    
}

export default Inicio