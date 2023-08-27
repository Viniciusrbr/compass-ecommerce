import styled from "styled-components";

const colors = {
    aqua: "#62D0B6",
    coral: "#F55157",
    white: "#FFFFFF"
  };

const fonts = {
    robotoFlex: "Roboto Flex",
  };

const TagShape = styled.div`
display: flex;
flex-direction: column;
left: 16px;
margin: 0;
position: absolute;
top: 16px;
`

const TagRectangle = styled.div`
    align-items: center;
    background: ${colors.coral};
    border-radius: 2px;
    display: flex;
    gap: 10px;
    height: 30px;
    justify-content: center;
    width: 67px;

p {
    color: ${colors.white};
    display: inline-block;
    font-family: Roboto Flex;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    height: 16px;
    line-height: normal;
    text-align: center;
    width: 58px !important;
}
`

const TagTriangle = styled.div`
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 6px 9px 6px;
    border-color: transparent transparent ${colors.coral} transparent;
    left: 64px;
    position: absolute;
    transform: rotate(90deg);
`

const TagDiscount = () => {
    return (
        <TagShape>
        <TagRectangle><p>25% OFF</p><TagTriangle/></TagRectangle>
        </TagShape>
    );
};

export default TagDiscount