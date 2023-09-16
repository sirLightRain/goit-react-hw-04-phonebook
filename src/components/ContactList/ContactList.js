import { StyledWrapper, StyledLi, StyledButton } from './ContactList.styled';

export const ContactList = ({ contacts, onDeleteContact, filter }) => {
  const filteredConacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <StyledWrapper>
      {filteredConacts.length === 0 ? (
        <p>
          {filter === ''
            ? 'В книзі немає жодного контакту'
            : `Контакту з іменем ${filter} не знайдено`}
        </p>
      ) : (
        filteredConacts.map(item => (
          <StyledLi key={item.id}>
            📱 {item.name}: {item.number}
            <StyledButton
              type="button"
              onClick={() => onDeleteContact(item.id)}
            >
              DELETE
            </StyledButton>
          </StyledLi>
        ))
      )}
    </StyledWrapper>
  );
};
