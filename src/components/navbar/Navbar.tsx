import { MdCircleNotifications } from 'react-icons/md';
import { TiMessage } from 'react-icons/ti';
import { Link } from 'react-router-dom';
import LogoImage from '../../assets/logo.png';
import MainMenu from '../main-menubar/MainMenu';
import SearchBar from '../searchbar/SearachBar';
import {
  LeftContainer,
  Logo,
  LogoContainer,
  NavbarContainer,
  RightContainer,
  RightMenubarContainer,
} from './style';

function Navbar() {
  return (
    <NavbarContainer>
      <LeftContainer>
        <LogoContainer>
          <Link to="/">
            <Logo src={LogoImage} />
          </Link>
        </LogoContainer>
        <SearchBar />
        <MainMenu />
      </LeftContainer>

      <RightContainer>
        <RightMenubarContainer>
          <TiMessage />
          <MdCircleNotifications />
        </RightMenubarContainer>
      </RightContainer>
    </NavbarContainer>
  );
}

export default Navbar;
