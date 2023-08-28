import styled from "styled-components";
import OfferItem from "./OfferItem/index";

const OfferSection = styled.section`
box-sizing: border-box;
    display: flex;
    padding: var(--spacing-6-xl, 56px) 200px;
    flex-direction: column;
    align-items: flex-end;
    gap: var(--spacing-3-xl, 32px);
    height: 450px;
    //width: 1600px;
`

const OfferContainerTitle = styled.p`
    color: var(--jet);
    font-family: Roboto Flex;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    height: 35px;
    line-height: 35px;
    margin: 0;
    text-align: right;
    //width: 1200px;
`;

const OfferContainer = styled.section`
    align-items: flex-start;
    align-self: stretch;
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

            </OfferContainer>
        </OfferSection>
    )
};

export default Offers