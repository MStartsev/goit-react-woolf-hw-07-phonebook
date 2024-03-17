import css from './ContactListItem.module.css';
import { ReactComponent as TelephoneReceiver } from 'img/telephonereceiver.svg';

const replacePhoneNumber = phoneNumber =>
  'tel:' + phoneNumber.replace(/[-()]/g, '');

const ContactListItem = ({ name, phone, onContactDelete }) => (
  <li className={css.item}>
    <p className={css.item_text}>
      <a href={replacePhoneNumber(phone)}>
        <TelephoneReceiver className={css.telephonereceiver} />
      </a>
      <span className={css.name}>{name}</span>:
      <span className={css.number}>{phone}</span>
    </p>
    <button className={css.btn_delete} type="button" onClick={onContactDelete}>
      Delete
    </button>
  </li>
);

export default ContactListItem;
