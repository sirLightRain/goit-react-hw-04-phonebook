import { Formik } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';

import { InputWrapper } from 'components/InputWrapper/InputWrapper';
import {
  StyledForm,
  StyledErrorMessage,
  StyledField,
  StyledButton,
} from './ContactForm.styled';

import { useRef } from 'react';

const validation = Yup.object().shape({
  name: Yup.string()
    .matches(/^[a-zA-Zа-яА-ЯіІїЇєЄёЁґҐ\s'-]+$/, 'Please input correct name.')
    .required('Required'),
  number: Yup.string()
    .matches(
      /^[0-9\s()+-]+$/,
      'Please input correct tel. Contain spaces, dashes, parentheses, and can start with +'
    )
    .required('Required'),
});

export const ContactForm = ({ addContact }) => {
  // Створюємо посилання на кнопку "Add contact"
  const buttonRef = useRef(null);

  return (
    <div>
      <Formik
        initialValues={{ name: '', number: '' }}
        validationSchema={validation}
        onSubmit={(values, actions) => {
          // Передаємо сформований обєкт у state і додаємо унікальний ID
          addContact({ ...values, id: nanoid() });
          actions.resetForm();
          // Знімаємо фокус з кнопки після натискання
          if (buttonRef.current) {
            buttonRef.current.blur();
          }
        }}
      >
        <StyledForm>
          <InputWrapper title="Name">
            <StyledField
              type="text"
              name="name"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
            <StyledErrorMessage name="name" component="div" />
          </InputWrapper>
          <InputWrapper title="Number">
            <StyledField
              type="tel"
              name="number"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
            <StyledErrorMessage name="number" component="div" />
          </InputWrapper>
          <StyledButton type="submit" ref={buttonRef}>
            Add contact
          </StyledButton>
        </StyledForm>
      </Formik>
    </div>
  );
};
