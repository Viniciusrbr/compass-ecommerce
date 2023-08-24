import styled from "styled-components";
import OfferItem from "./OfferItem/index";

const OfferSection = styled.section`
    display: flex;
    width: 1600px;
    padding: var(--spacing-6-xl, 56px) 200px;
    flex-direction: column;
    align-items: flex-start;
    gap: var(--spacing-3-xl, 32px);
    height: 450px;
    width: 1600px;
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
    height: 271px;
    gap: var(--spacing-2-x1, 24px);
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