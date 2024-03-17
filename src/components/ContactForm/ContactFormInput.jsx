import css from './ContactForm.module.css';

const NAME_PATTERN =
  '[a-zA-Zа-яА-ЯЇїЄєІі]{1,20}\u002E?\u0020?-?\u0027?\u02BC?\u2014?[0-9a-zA-Zа-яА-ЯЇїЄєІі]{1,20}\u002E?\u0020?-?\u0027?\u02BC?[0-9a-zA-Zа-яА-ЯЇїЄєІі]{1,20}\u002E?';
const TEL_PATTERN =
  '[+0-9][0-9]{1,12}\u002D?\u0028?[0-9]{0,11}\u002D?\u0028?\u0029?[0-9]{0,9}\u002D?\u0028?\u0029?[0-9]{0,7}\u002D?[0-9]{0,5}';

const CustomInput = props => (
  <input {...props} className={css.input} required />
);

export const ContactFormInput = ({ textLabel, onChange, value }) => {
  const toUpperCaseFirstLetter = word =>
    word.charAt(0).toUpperCase() + word.slice(1);

  const inputNameType = textLabel === 'name';

  return (
    <label className={css.label}>
      {toUpperCaseFirstLetter(textLabel)}
      <CustomInput
        onChange={onChange}
        value={value}
        className={css.input}
        type={inputNameType ? 'text' : 'tel'}
        name={inputNameType ? 'name' : 'phone'}
        pattern={inputNameType ? `${NAME_PATTERN}` : `${TEL_PATTERN}`}
        title={
          inputNameType
            ? 'Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer-Saak, Тарас Шевченко'
            : 'Phone phone must be digits and can contain dashes, parentheses and can start with +'
        }
      />
    </label>
  );
};
