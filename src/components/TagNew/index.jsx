import styled from "styled-components";

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
    background: var(--turquoise);
    border-radius: 2px;
    display: flex;
    gap: 10px;
    height: 30px;
    justify-content: center;
    text-decoration: none;
    width: 55px;

p {
    color: var(--white);
    font-family: Roboto Flex;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 0;
    padding: 0;
    text-align: center;
    text-decoration: none;
}
`

const TagTriangle = styled.div`
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 6px 9px 6px;
    border-color: transparent transparent var(--turquoise) transparent;
    left: 49px;
    position: absolute;
    transform: rotate(90deg);
`

const TagNew = () => {
    return (
        <TagShape>
        <TagRectangle><p>Novo</p><TagTriangle/></TagRectangle>
        </TagShape>
    );
};

export default TagNew