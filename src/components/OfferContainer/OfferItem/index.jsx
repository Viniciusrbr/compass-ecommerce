import styled from "styled-components";
import ProductImage from "../../../assets/images/watch.jpeg";

const colors = {
    aqua: "#62D0B6",
    coral: "#F55157",
    lightGray: "#F8F8F8",
    mediumGray: "#A5A5A5",
    mediumDarkGray: "#666666",
    darkGray: "#333333",
    white: "#FFFFFF"
};

const OfferItemContainer = styled.div`
    background: ${colors.white};
    border-radius: var(--radius-sm, 4px);
    border: 2px solid ${colors.aqua};
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex: 1 0 0;
`

const OfferItemDetails = styled.div`
    display: flex;
    padding: var(--spacing-xl, 16px);
    flex-direction: column;
    align-items: flex-end;
    gap: var(--spacing-xl, 16px);
    flex: 1 0 0;
`

const OfferItemImage = styled.section`
    align-self: stretch;
    background-image: url(${ProductImage});
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 0 4px 0 0;
    width: 196px;
`

const OfferItemTextInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: var(--spacing-md, 4px);
    align-self: stretch;
`

const OfferItemTitle = styled.p`
    align-self: stretch;
    color: ${colors.darkGray};
    text-align: right;
    font-family: Roboto Flex;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 25px;
    margin: 0;
`

const OfferItemDescription = styled.p`
    align-self: stretch;
    color: ${colors.mediumDarkGray};
    text-align: right;
    font-family: Roboto Flex;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 25px;
    margin: 0;
`

const OfferItemRating = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: var(--spacing-lg, 8px);
    align-self: stretch;
    margin: 0;
`

const OfferItemRatingText = styled.p`
    color: ${colors.mediumGray};
    text-align: right;
    font-family: Roboto Flex;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 0;
`

const OfferItemRatingStars = styled.div`
    display: flex;
    height: 16px;
    justify-content: flex-end;
    align-items: center;
    gap: var(--spacing-sm, 2px);
    align-self: stretch;
    margin: 0;
    width: 73px;
`

const OfferItemStarIcon = styled.img`
    color: #D6D6D6;
    display: flex;
    width: 13px;
    height: 13px;
    padding: 0.299px 0px 0.3px 0px;
    justify-content: center;
    align-items: center;
    margin: 0;
`

const OfferItem = () => {
    return (
        <OfferItemContainer>
            <OfferItemDetails>
                <OfferItemImage />
                <OfferItemTextInfo>
                    <OfferItemTitle>Novo relógio inteligente da série 8</OfferItemTitle>
                    <OfferItemDescription>Black Sport Band - Regular.</OfferItemDescription>
                    <OfferItemRating>
                        <OfferItemRatingText>(4.5)</OfferItemRatingText>
                        <OfferItemRatingStars>
                            <OfferItemStarIcon />
                            <OfferItemStarIcon />
                            <OfferItemStarIcon />
                            <OfferItemStarIcon />
                            <OfferItemStarIcon />
                        </OfferItemRatingStars>
                    </OfferItemRating>
                </OfferItemTextInfo>
            </OfferItemDetails>
        </OfferItemContainer>
    );
};

export default OfferItem