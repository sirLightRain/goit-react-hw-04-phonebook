import styled from 'styled-components';

export const StyledWrapper = styled.ul`
  display: flex;
  flex-direction: column;

  gap: 4px;
  max-width: 100%;

  margin-top: 24px;
  margin-bottom: 16px;
  padding: 8px;

  outline: 2px solid ${props => props.theme.colors.grey};
  border-radius: 4px;
  background-color: ${props => props.theme.colors.yellow};
`;

export const StyledLi = styled.li`
  display: flex;
  justify-content: space-between;
`;

export const StyledButton = styled.button`
  width: 100px;
  margin-left: 8px;

  cursor: pointer;
  border: none;
  padding: 0px 2px 2px 2px;

  border: none;
  border-radius: 4px;
  &:hover,
  &:focus {
    outline: 2px solid ${props => props.theme.colors.grey};
    background-color: ${props => props.theme.colors.blue};
  }
`;
