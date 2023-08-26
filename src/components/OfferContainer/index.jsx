import styled from "styled-components";
import OfferItem from "./OfferItem/index";

const OfferSection = styled.section`
    display: flex;
    flex-direction: column;
`

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
    align-items: flex-start;
    align-self: stretch;
    background: #F8F8F8;
    display: flex;
    gap: 24px;
    width: 1200px;
`

const Offers = () => {
    return (
        <OfferSection>
            <OfferContainerTitle>Ofertas terminando em breve</OfferContainerTitle>
            <OfferContainer>
                <OfferItem />
                <OfferItem />
            </OfferContainer>
        </OfferSection>
    )
};

export default Offers