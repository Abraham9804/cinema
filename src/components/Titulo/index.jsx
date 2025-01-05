import styled from "styled-components"

const TituloStyles = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 45px;
    margin-bottom: 35px;

    h1{
        color: var(--negro);
        font-size: 28px;
        font-weight: 600;
    }
`

const Titulo = ({children}) => {
    return <TituloStyles>
            {children}
        </TituloStyles>
}

export default Titulo

