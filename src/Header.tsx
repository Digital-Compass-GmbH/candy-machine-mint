import { Container } from "@material-ui/core";
import styled from "styled-components";
import logoIcon from './media/logo_brown_width.svg'

const HeaderContainer = styled(Container)`
padding-top: 40px;
padding-bottom: 40px;
text-align: center;
`;

const Header = () => {

  return (
    <HeaderContainer>
      <Container maxWidth='sm'>
        <img src={logoIcon} style={{ width: '100%' }} alt='logo' />
      </Container>
      <h3>Welcome to the official minting event of the BuzzClubNFT community!</h3>
      <h3>Are you ready to adopt a real bee?</h3>
    </HeaderContainer>
  );
};

export default Header;
