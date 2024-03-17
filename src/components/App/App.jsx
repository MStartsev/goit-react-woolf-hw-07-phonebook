import ContactForm from '../ContactForm/ContactForm';
import Filter from '../Filter/Filter';
import ContactList from '../ContactList/ContactList';
import { ReactComponent as Book } from 'img/book.svg';

import css from './App.module.css';

export default function App() {
  return (
    <div className={css.wrapper}>
      <section className={css.phonebook}>
        <h1 className={css.title}>
          <Book className={css.book} /> <span>Phonebook</span>
        </h1>
        <ContactForm />
        <h2 className={css.subtitle}>Contacts List</h2>
        <Filter />
        <ContactList />
      </section>
    </div>
  );
}
