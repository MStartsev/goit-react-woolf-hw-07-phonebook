import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectContacts } from 'redux/selectors';

import { addContact } from 'redux/operations';

import { default as css } from './ContactForm.module.css';
import { ContactFormInput } from './ContactFormInput';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);

  const stateReset = () => {
    setName('');
    setPhone('');
  };

  const onInputChange = e => {
    const { name } = e.currentTarget;
    let { value } = e.currentTarget;

    name === 'phone'
      ? setPhone(
          value.replaceAll(
            /[a-zA-Zа-яА-ЯЇїЄєІі'`" =!№@#$%^&*/[\],?;:.\\{}]/g,
            ''
          )
        )
      : setName(
          value
            .trimStart()
            .replaceAll('  ', ' ')
            .replaceAll(/[`"=+!№@#$%^&*/[\],?;:\\{}]/g, '')
        );
  };

  const includesContact = () =>
    contacts.some(contact => {
      if (contact.name.toLowerCase().includes(name.toLowerCase())) {
        alert(`${name} is already in contacts.`);
        return true;
      }

      if (contact.phone.includes(phone)) {
        alert(`${phone} is already in contacts.`);
        return true;
      }

      return false;
    });

  const onHandleSubmit = e => {
    e.preventDefault();

    if (includesContact()) return;

    dispatch(
      addContact({
        name,
        phone,
      })
    );

    stateReset();
  };

  return (
    <form className={css.form} onSubmit={onHandleSubmit}>
      <p className={css.text}>Add new contact</p>
      <ContactFormInput
        onChange={onInputChange}
        value={name}
        textLabel="name"
      />

      <ContactFormInput
        onChange={onInputChange}
        value={phone}
        textLabel="phone number"
      />

      <button className={css['form-button']} type="submit">
        Add Contact
      </button>
    </form>
  );
};

export default ContactForm;
