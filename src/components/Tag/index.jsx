import styled from "styled-components";

const colors = {
    aqua: "#62D0B6",
    coral: "#F55157",
    white: "#FFFFFF"
  };

const fonts = {
    robotoFlex: "Roboto FLex",
  };

const TagRectangle = styled.div`
    align-items: center;
    border-radius: 2px;
    display: flex;
    gap: 10px;
    height: 30px;
    justify-content: center;
    padding: 5px 10px 10px 10px;
    width: 55px;

    p {
        color: ${white};
        font-family: Roboto Flex;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        text-align: center;
    }
`

const TagTriangle = styled.div`
    background: ${aqua};
    clip-path: polygon (50% 0, 100% 100%, 0 100%);
    height: 9px;
    transform: rotate(90deg);
    width: 12px;
`

const Tag = () => {
    return (
        <div>
        <TagRectangle>Novo</TagRectangle>
        </div>
    );
};

export default Tag
