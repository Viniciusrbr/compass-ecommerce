import styled from "styled-components";
import useCountdown from "../hooks/useCountdown";

const colors = {
    aqua: "#62D0B6",
    aquaHover: "#81D9C5",
    coral: "#F55157",
    buttonGray: "#EEEEEE",
    lightGray: "#F8F8F8",
    mediumGray: "#A5A5A5",
    mediumDarkGray: "#666666",
    darkGray: "#333333",
    white: "#FFFFFF"
};

const CountdownContainer = styled.div`
    display: flex;
    align-items: flex-start;
    gap: var(--spacing-lg, 8px);
    align-self: stretch;
    height: 48px;
    width: 360px;
`

const CountdownItem = styled.div`
    background: ${colors.lightGray};
    border-radius: 4px;
    display: flex;
    padding: var(--spacing-md, 4px) var(--spacing-xl, 16px) var(--spacing-lg, 8px) var(--spacing-xl, 16px);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: -5px;
    flex: 1 0 0;
    height: 36px;
    width: 52px;

    p.num {
        color: ${colors.darkGray};
        text-align: right;
        font-family: Roboto Flex;
        font-size: 18px;
        font-style: normal;
        font-weight: 500;
        line-height: 25px;
        margin: 0;
    }

    p.label {
        color: ${colors.mediumGray};
        text-align: right;
        font-family: Roboto Flex;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        margin: 0;
    }
`


const Countdown = () => {
    const [day, hour, minute, second] = useCountdown("Aug 30, 2023 23:59:59");
    return (
        <CountdownContainer>
            <CountdownItem>
                <p className="num">
                    {day}
                </p>
                <p className="label">
                    Dias
                </p>
            </CountdownItem>
            <CountdownItem>
                <p className="num">
                    {hour}
                </p>
                <p className="label">
                    Horas
                </p>
            </CountdownItem>
            <CountdownItem>
                <p className="num">
                    {minute}
                </p>
                <p className="label">
                    Minutos
                </p>
            </CountdownItem>
            <CountdownItem>
                <p className="num">
                    {second}
                </p>
                <p className="label">
                    Segundos
                </p>
            </CountdownItem>
        </CountdownContainer>
    );
};

export default Countdown