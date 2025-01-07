import styled from "styled-components"
import Banner from "../../components/Banner"
import Titulo from "../../components/Titulo"
import { useParams } from "react-router-dom"
import Videos from "../inicio/db.json"
import NotFound from "../notFound"

const CardContainer = styled.section`
    width: 100%;
    height: 50vh;
    margin: auto;
    margin-bottom: 200px;
    display: flex;
    justify-content: center;
    gap: 17px;
`


const Player = () => {
    const parametros = useParams()
    const videoSeleccionado = Videos.find(video => video.id === Number(parametros.id))
    
    if(!videoSeleccionado){
        return <NotFound></NotFound>
    }
    return <>
            <Banner img="/img/banner-player.png" color="#58B9AE"/>
            <Titulo>
                <h1>Reproducir video</h1>
            </Titulo>
            <CardContainer>
            <iframe width="560" height="315" 
            src={videoSeleccionado.link} 
            title={videoSeleccionado.titulo} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
            </iframe>
            </CardContainer>
    </>
}

export default Player 