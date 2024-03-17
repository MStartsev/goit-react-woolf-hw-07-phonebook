import css from './Filter.module.css';

import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';
import { selectFilter } from '../../redux/selectors';

const Filter = () => {
  const value = useSelector(selectFilter);
  const dispatch = useDispatch();

  const onChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div className={css.container}>
      <label className={css.label}>
        Find contacts by name
        <input
          className={css.input}
          value={value}
          onChange={onChange}
          type="text"
          placeholder="Enter name"
        />
      </label>
    </div>
  );
};

export default Filter;
