import styled from "styled-components";
import OfferItem from "./OfferItem/index";

const OfferContainerTitle = styled.p`
    color: #333333;
    font-family: Roboto Flex;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    height: 35px;
    line-height: 35px;
    margin: 0;
    padding-top: 56px;
    text-align: right;
    width: 1200px;
`;

const OfferContainer = styled.section`
    align-items: center;
    background: #F8F8F8;
    display: flex;
    flex-direction: column;
    padding: 0 200px;
`

const Offers = () => {
    return (
        <OfferContainer>
            <OfferContainerTitle>Ofertas terminando em breve</OfferContainerTitle>
            <OfferItem />
        </OfferContainer>
    )
};

export default Offers