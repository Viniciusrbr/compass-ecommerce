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
    margin: 0;
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
    border-color: transparent transparent transparent ${colors.coral};
    border-style: solid;
    border-width: 4.5px 0 4.5px 12px;
    bottom: 20px;
    height: 0;
    left: 62px;
    position: relative;
    width: 0;
`

const Tag = () => {
    return (
        <>
        <TagRectangle><p>25% OFF</p></TagRectangle>
        <TagTriangle />
        </>
    );
};

export default Tag