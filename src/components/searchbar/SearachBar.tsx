import {
  useEffect,
  useRef,
  useState,
} from 'react';
import {
  IconMagnifyingGlass,
  IconRightArrow,
  SearchContainer,
  SearchInput,
} from './style';

function SearchBar() {
  const searchInputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    if (searchInputRef?.current) {
      if (searchInputRef.current) searchInputRef.current.focus();
    }
  }, [isFocused]);

  return (
    <SearchContainer
      onClick={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    >
      <SearchInput ref={searchInputRef} showSearchInput={isFocused} />
      {isFocused ? <IconRightArrow /> : <IconMagnifyingGlass />}
    </SearchContainer>
  );
}

export default SearchBar;
