import { Container } from "@material-ui/core";
import styled from "styled-components";

const FooterContainer = styled(Container)`
  text-align:center;
  width: 100%;
  height: 50px;
  padding-top:16px;
  padding-bottom:16px;
`;


const Footer = () => {

  return (
    <FooterContainer>
      Attention! Before you mint, make sure the URL matches mint-area.buzzclubnft.com!
    </FooterContainer>
  );
};

export default Footer;
