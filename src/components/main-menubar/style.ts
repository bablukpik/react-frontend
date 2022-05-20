import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {
  ColorGray10,
  FontFamilyDefault,
  FontSizeSm,
  FontWeightBold,
  LetterSpacing4,
  SpacingMd,
} from 'src/styles/tokens';

export const NavbarLinkContainer = styled.div`
  display: flex;
`;

export const NavbarLink = styled(Link)`
  text-decoration: none;
  color: ${ColorGray10};
  font-family: ${FontFamilyDefault};
  font-size: ${FontSizeSm};
  margin-left: ${SpacingMd};
  margin-right: ${SpacingMd};
  font-weight: ${FontWeightBold};
  letter-spacing: ${LetterSpacing4};
  transition: all .2s ease-in-out;
  @media (max-width: 700px) {
    display: none;
  }
`;
