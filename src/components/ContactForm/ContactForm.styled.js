import styled from 'styled-components';
import { Form, ErrorMessage, Field } from 'formik';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 8px;

  margin-top: 24px;
  margin-bottom: 16px;
  padding: 0px 8px 8px 8px;

  border: none;
  border-radius: 4px;
  background-color: ${props => props.theme.colors.yellow};

  outline: 2px solid ${props => props.theme.colors.grey};
`;

export const StyledErrorMessage = styled(ErrorMessage)`
  margin-top: 2px;

  width: 180px;
  text-align: center;

  font-size: 14px;
  font-weight: bold;
  color: ${props => props.theme.colors.red};
`;

export const StyledField = styled(Field)`
  width: 100%;
  border: none;
  padding: 0px 2px 2px 2px;

  border: none;
  border-radius: 4px;
  &:hover,
  &:focus,
  &:active {
    outline: 2px solid ${props => props.theme.colors.grey};
  }
`;

export const StyledButton = styled.button`

  width: 100px;

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
