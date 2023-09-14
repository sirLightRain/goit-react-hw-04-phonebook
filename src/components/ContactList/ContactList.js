import { StyledWrapper, StyledLi, StyledButton } from './ContactList.styled';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <StyledWrapper>
      {contacts.map(item => (
        <StyledLi key={item.id}>
          📱 {item.name}: {item.number}
          <StyledButton type="button" onClick={() => onDeleteContact(item.id)}>
            DELETE
          </StyledButton>
        </StyledLi>
      ))}
    </StyledWrapper>
  );
};
