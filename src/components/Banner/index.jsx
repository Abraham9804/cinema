import styled from "styled-components";

const BannerStyles = styled.div`
    width: 100%;
    height: 276px;
    background-image: ${props => `url(${props.$img})`};
    background-repeat: no-repeat;
    background-size: cover;
    background-color: ${props => props.$color};
    opacity: 0.9;
`

const Banner = ({img, color}) => {
    return (
        <BannerStyles $img={img} $color={color}>
            
        </BannerStyles>
    )
}

export default Banner