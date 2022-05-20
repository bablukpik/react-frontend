import { useAuth } from '../../util/auth';
import { NavbarLink, NavbarLinkContainer } from './style';

function MainMenu() {
  const { token, onLogout } = useAuth();

  return (
    <NavbarLinkContainer>
      <NavbarLink to="/">Home</NavbarLink>
      <NavbarLink to="/about">About Us</NavbarLink>
      <NavbarLink to="/mission">Mission</NavbarLink>
      <NavbarLink to="/contact">Contact</NavbarLink>
      <NavbarLink to="/private">Private</NavbarLink>

      {token ? (
        <NavbarLink onClick={onLogout} to="/logout">Logout</NavbarLink>
      ) : (
        <NavbarLink to="/login">Login</NavbarLink>
      )}
      <NavbarLink to="/signup">Signup</NavbarLink>
    </NavbarLinkContainer>
  );
}

export default MainMenu;
