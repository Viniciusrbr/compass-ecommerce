import styled from "styled-components";
import appleIcon from "../../../assets/icons/apple-app-store.svg";
import Google from "../../../assets/icons/googleplay.png";
import EmailIcon from "../../../assets/icons/email.svg";
import masterIcon from "../../../assets/icons/master.png";
import paypalIcon from "../../../assets/icons/paypal.png";
import visaIcon from "../../../assets/icons/visa.png";

const FooterBlack = styled.div`
  background: var(--eerieBlack);
  box-sizing: border-box;
  display: flex;
  height: 63px;
  padding: var(--spacing-xl, 16px) 200px;
  justify-content: center;
  align-items: center;
  gap: var(--spacing-2-xl, 24px);
  flex-shrink: 0;
  //width: 1600px;
`;

const Payment = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  gap: var(--spacing-lg, 8px);
`;

const PaymentMethod = styled.div`
  align-items: center;
  border-radius: 2px;
  background: var(--white);
  box-sizing: border-box;
  display: flex;
  width: 60px;
  height: 31px;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  padding: 10px;

  img {
    max-height: 25px;
    max-width: 46px;
  }
`;

const FooterText = styled.p`
  color: var(--white);
  text-align: right;
  flex: 1 0 0;
  font-family: Roboto Flex;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const FooterWhite = styled.div`
  box-sizing: border-box;
  display: flex;
  padding: var(--spacing-2-xl, 24px) 200px;
  justify-content: center;
  align-items: center;
  gap: var(--spacing-2-xl, 24px);
  flex-shrink: 0;
  height: 133px;
  //width: 1600px;
`;

const DownloadApp = styled.div`
  display: flex;
  padding: 1px 0px var(--spacing-sm, 2px) 0px;
  flex-direction: column;
  align-items: flex-end;
  gap: var(--spacing-xl, 16px);
  height: 77px;
  width: 276px;

  p {
    align-self: stretch;
    color: var(--jet);
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin: 0;
    padding: 0;
    text-align: right;
  }
`;

const AppStoreOptions = styled.div`
  display: flex;
  height: 42px;
  align-items: flex-start;
  gap: var(--spacing-lg, 8px);
  align-self: stretch;
`;

const AppStoreIcon = styled.img`
  width: 134px;
  height: 42px;
`;

const SubscribeDetails = styled.div`
  display: flex;
  padding: 1px 0px var(--spacing-sm, 2px) 0px;
  justify-content: flex-end;
  align-items: center;
  gap: var(--spacing-2-xl, 24px);
  flex: 1 0 0;
  height: auto;
  width: 900px;
`;

const SubscribeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  gap: var(--spacing-xl, 16px);
  flex: 1 0 0;
  align-self: stretch;
  height: 100%;
  width: 100%;

  p {
    align-self: stretch;
    color: var(--jet);
    text-align: right;
    font-family: Roboto Flex;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    height: auto;
    line-height: normal;
    margin: 0;
    padding: 0;
    width: 100%;
  }
`;

const SubscribeSection = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: var(--spacing-lg, 8px);
  align-self: stretch;
  height: auto;
  width: 100%;
`;

const SubscribeButton = styled.button`
  align-items: center;
  border-radius: var(--radius-sm, 4px);
  border: 1px solid var(--turquoise);
  background: var(--turquoise);
  display: flex;
  padding: var(--spacing-lg, 8px) var(--spacing-xl, 16px);
  justify-content: center;
  gap: var(--spacing-lg, 8px);
  align-self: stretch;
  height: 100%;
  width: 90px;

  p {
    color: var(--white);
    text-align: right;
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 14px;
    margin: 0;
    padding: 0;
  }
`;

const Newsletter = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: var(--spacing-xl, 16px);
  align-self: stretch;
  height: 100%;
  width: auto;
`;

const NewsletterText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: var(--spacing-md, 4px);
  height: auto;
  width: auto;
`;

const Signup = styled.p`
  color: var(--jet);
  text-align: right;
  font-family: Roboto Flex;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  height: auto;
  line-height: 30px;
  margin: 0;
  padding: 0;
  width: auto;
`;

const Earn = styled.p`
  color: var(--dimGray);
  text-align: right;
  font-family: Roboto Flex;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  height: auto;
  line-height: normal;
  margin: 0;
  padding: 0;
  width: auto;
`;

const NewsletterIconContainer = styled.div`
  border-radius: 50px;
  box-sizing: border-box;
  background: var(--mintGreen);
  display: flex;
  padding: var(--spacing-xl, 16px);
  justify-content: center;
  align-items: center;
  height: 64px;
  width: 64px;

  img {
    background-image: url(${EmailIcon});
    background-origin: content-box;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: contain;
  }
`;

const EmailIconContainer = styled.div`
  background-image: ${EmailIcon};
  background-origin: content-box;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
`;

const SearchInput = styled.input`
  border: none;
  outline: none;
  width: 100%;
  text-align: right;
  border: 1px solid var(--antiFlashWhite);
  border-radius: 4px;
  padding: 10px;
`;

function Footer() {
  return (
    <>
      <FooterWhite>
        <DownloadApp>
          <p>Baixe nosso App</p>
          <AppStoreOptions>
            <AppStoreIcon src={appleIcon} />
            <AppStoreIcon src={Google} />
          </AppStoreOptions>
        </DownloadApp>
        <SubscribeDetails>
          <SubscribeContainer>
            <p>Você pode cancelar a inscrição a qualquer momento</p>
            <SubscribeSection>
              <SubscribeButton>
                <p>Inscrever</p>
              </SubscribeButton>
              <SearchInput
                type="text"
                id="fname"
                placeholder="Digite o e-mail"
              />
            </SubscribeSection>
          </SubscribeContainer>
          <Newsletter>
            <NewsletterText>
              <Signup>Assine a newsletter</Signup>
              <Earn>
                Cadastre-se agora e ganhe 10% de desconto na sua próxima compra!
              </Earn>
            </NewsletterText>
            <NewsletterIconContainer>
              <img src={EmailIcon} />
            </NewsletterIconContainer>
          </Newsletter>
        </SubscribeDetails>
      </FooterWhite>
      <FooterBlack>
        <Payment>
          <PaymentMethod>
            <img src={paypalIcon}></img>
          </PaymentMethod>
          <PaymentMethod>
            <img src={masterIcon}></img>
          </PaymentMethod>
          <PaymentMethod>
            <img src={visaIcon}></img>
          </PaymentMethod>
        </Payment>

        <FooterText>
          <p>2023 © Todos os direitos reservados </p>
        </FooterText>
      </FooterBlack>
    </>
  );
}

export default Footer;
