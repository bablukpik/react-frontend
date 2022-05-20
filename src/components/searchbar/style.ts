import styled, { css, keyframes } from 'styled-components';
import {
  BorderRadiusFull,
  ColorGray80,
  ColorGray90,
  ColorWhite,
  FontSizeSm,
  Height2xs,
  HeightFull,
  IconHeightSm,
  IconWidthSm,
  SpacingMd,
  SpacingXs,
  Width2xs,
  WidthFull,
} from 'src/styles/tokens';
import ArrowRightIcon from '../../assets/icons/arrowRight';
import SearchIcon from '../../assets/icons/search';

type TSearchInput = {
  showSearchInput: boolean;
}

export const SearchContainer = styled.div`
  position: relative;
  width: ${Width2xs};
  height: ${Height2xs};
  border-radius: ${BorderRadiusFull};
  border: 0 solid ${ColorGray80};
  padding: ${SpacingXs};
  background: ${ColorWhite};
  transition: all 0.5s;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-right: ${SpacingMd};
  margin-left: ${SpacingMd};
  cursor: pointer;
`;

export const SearchInput = styled.input<TSearchInput>`
  position: absolute;
  top: 0;
  left: 0;
  width: ${WidthFull};
  height: ${HeightFull};
  border: 0;
  font-size: ${FontSizeSm};
  border-radius: ${BorderRadiusFull};
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  display: ${(props) => (props.showSearchInput ? 'block' : 'none')};
`;

/** icons */
const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const IconCommonCss = css`
  height: ${IconHeightSm};
  width: ${IconWidthSm};
  z-index: 10;
  animation: ${fadeIn} 1s linear;
`;

export const IconMagnifyingGlass = styled(SearchIcon)`
  ${IconCommonCss}
`;

export const IconRightArrow = styled(ArrowRightIcon)`
  ${IconCommonCss}
  align-self: flex-end;
  cursor: pointer;
  &:hover {
    fill: ${ColorGray90};
  }
`;
