import styled from 'styled-components';
import {
  BorderRadiusFull,
  ColorGray100,
  ColorWhite,
  HeightMd,
  HeightSm,
  IconHeightMd,
  IconWidthMd,
  SpacingMd,
  SpacingXl,
  SpacingXs,
  WidthFullVw,
  WidthXl,
} from 'src/styles/tokens';

export const NavbarContainer = styled.nav`
  width: ${WidthFullVw};
  height: ${HeightMd};
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  background: ${ColorGray100};
  padding-left: ${SpacingXl};
  padding-right: ${SpacingXl};
`;

export const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LogoContainer = styled.div`
  display: flex;
`;

export const Logo = styled.img`
  max-width: ${WidthXl};
  height: ${HeightSm};
  margin-top: ${SpacingXs};
  margin-right: ${SpacingMd};
`;

export const RightContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RightMenubarContainer = styled.div`
  & > svg {
    background: ${ColorWhite};
    height: ${IconHeightMd};
    width: ${IconWidthMd};
    margin-left: ${SpacingMd};
    border-radius: ${BorderRadiusFull};
  }
`;
