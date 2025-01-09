import styled from "styled-components"
import Banner from "../../components/Banner"
import Card from "../../components/Card"
import Titulo from "../../components/Titulo"
import { useEffect, useState } from "react"


const CardContainer = styled.section`
    width: 100%;
    margin: auto;
    margin-bottom: 200px;
    display: flex;
    justify-content: center;
    gap: 17px;
`

const Inicio = () => {

    const [Videos, setVideos] = useState([])

    useEffect(()=>{
        fetch("https://my-json-server.typicode.com/Abraham9804/cinema-api/videos")
        .then(response => response.json())
        .then(datos => setVideos(datos))
        .catch(error => console.log(error))
    },[])
    
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