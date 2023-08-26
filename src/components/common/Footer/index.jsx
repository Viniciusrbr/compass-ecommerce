import styled from "styled-components";
import appleIcon from "../../../assets/icons/apple.png";
import googleplayIcon from "../../../assets/icons/googleplay.png";
import Icon from "../../../assets/icons/Icon 1.png";
import masterIcon from "../../../assets/icons/master.png";
import paypalIcon from "../../../assets/icons/paypal.png";
import visaIcon from "../../../assets/icons/visa.png";


const FooterText = styled.div`
  margin: 0;
  font-family: Roboto Flex;
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: right;

  p {
    margin: 0;
    color: #ffffff;
    font-size: 14px;
    font-weight: 400;
  }
`;

const FooterBlack = styled.div`
  width: 100%; 
  height: 63px; 
  display: flex; 
  align-items: center; 
  justify-content: space-around; 
  background-color: #1D1F1F;
  font-size: 12px;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  background: var(--primary-color);
  border-radius: 4px;
  border: 1px solid var(--primary-color);

  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  color: #ffffff;

  padding: 16px;
  text-align: center;
  width: 200px;
`;

const AppleStoreIcon = styled.img`
  width: 132px;
  height: 40px;
  padding-left: 8px;
`;

const FooterWhite = styled.div`
  display: flex;
  align-items: center;
  background: #F8F8F8;
  top: -2.5px;
  padding: 24px 100px 24px 100px;
  border-radius: 2px;
  gap: 24px;
  font-family: "Roboto";
  font-size: 16px;
  text-align: right;
`;

const EmailIcon = styled.img`
  padding: 8px;
  width: 64px;
  height: 64px;
`;

const SearchInput = styled.input`
  border: none;
  outline: none;
  width: 100%;
  text-align: right;
  border: 1px solid #eee;
  border-radius: 4px;
  padding: 10px;
`;

const Subscribe = styled.div`
  display: flex;
  height: 38px;
  gap: 8px;
`;

const DownloadApp = styled.div`
  text-align: right;
  padding: 8px; 
`;

const Cards = styled.img`
  margin: 5px;

`;

const Newsletter = styled.div`
  display: inline-block;
  text-align: right;
`;

const Sign = styled.p`
  font-size: 20px;

`;

const Earn = styled.p`
  font-size: 14px;
  color: #666666;

`; 


function Footer() {
  return (
    <>
      <FooterWhite>
        <DownloadApp>
          <p>Baixe nosso App</p>
          <AppleStoreIcon src={appleIcon} />
          <AppleStoreIcon src={googleplayIcon} />
        </DownloadApp>

        <div id="cancelar-inscricao">
          <p>Você pode cancelar a inscrição a qualquer momento</p>

          <Subscribe>
            <Button>Inscrever</Button>
            <SearchInput type="text" id="fname" placeholder="Digite o e-mail" />
          </Subscribe>
        </div>
      
          <Newsletter>
          <Sign>Assine a newsletter</Sign>
          <Earn>
            Cadastre-se agora e ganhe 10% de desconto na sua próxima compra!
          </Earn>
          </Newsletter>
      

        <EmailIcon src={Icon} />
        
      </FooterWhite>
      <FooterBlack>
        <div>
          <Cards src={paypalIcon} />
          <Cards src={masterIcon} />
          <Cards src={visaIcon} />
        </div>
          
      
        <FooterText>
          <p>2023 © Todos os direitos reservados </p>
        </FooterText>
      </FooterBlack>
    </>
  );
}

export default Footer;
