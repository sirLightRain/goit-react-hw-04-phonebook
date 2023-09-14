import { StyledWrapper, StyledInput, StyledTitle } from './Filter.styled';

export const Filter = ({ onFilterChange, value }) => {
  return (
    <StyledWrapper>
      <StyledTitle>Find contacts by name</StyledTitle>
      <StyledInput
        type="text"
        value={value}
        onChange={evt => onFilterChange(evt.target.value)}
      ></StyledInput>
    </StyledWrapper>
  );
};
