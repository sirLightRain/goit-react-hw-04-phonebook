import { StyledTitle } from "./InputWrapper.styled";

export const InputWrapper = ({ title, children }) => {
  return (
    <div>
      <label>
        <StyledTitle>{title}</StyledTitle>
        {children}
      </label>
    </div>
  );
};
