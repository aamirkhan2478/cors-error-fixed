/* eslint-disable react/prop-types */
import { AiOutlineRight } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getdetail } from '../redux/popup/popup';

const Item = ({ record, count }) => {
  const dispatch = useDispatch();
  const handleClick = (record) => {
    dispatch(getdetail(record));
  };

  const image = `${process.env.PUBLIC_URL}/images/${record.name}.jpg`;
  return (
    <div className={count % 2 ? 'cards right' : 'cards left'}>
      <img src={image} alt={record.name} />
      <div>
        <p>{record.name}</p>
        <button onClick={() => handleClick(record)} type="button">
          <Link to="/details"><AiOutlineRight /></Link>
        </button>
      </div>
    </div>
  );
};

export default Item;
