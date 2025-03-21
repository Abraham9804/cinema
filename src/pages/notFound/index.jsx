import styled from "styled-components"
import Titulo from "../../components/Titulo"

const CardContainer = styled.section`
    width: 100%;
    height: 80vh;
    margin: auto;
    margin-bottom: 200px;
    display: flex;
    justify-content: center;
    gap: 17px;

    h1{
        color: red;
    }
`


const NotFound = () =>  {
    return <>
    <CardContainer>
        <Titulo>
            <h1>Pagina no encontrada</h1>
        </Titulo>
    </CardContainer>
        
    </>
}

export default  NotFound