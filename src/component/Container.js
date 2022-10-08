import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineArrowUp, AiFillCloseCircle, AiOutlineSearch } from 'react-icons/ai';
import { fetchdata } from '../redux/Container/Containers';
import Item from './Item';

const Container = () => {
  const { data } = useSelector((state) => state.container);
  const [scroll, setscroll] = useState(document.documentElement.scrollTop);
  const [bool, setbool] = useState(false);
  const dispatch = useDispatch();

  // const checkData = async () => {
  //   const res = await fetch('https://proxy.cors.sh/https://www.fruityvice.com/api/fruit/all');
  //   const data = await res.json();
  //   console.log(data);
  // }

  useEffect(() => {
    dispatch(fetchdata());
    window.onscroll = () => setscroll(document.documentElement.scrollTop);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(data);
  const handleScroll = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    setscroll(0);
  };

  const handleSearch = (event) => {
    const title = document.querySelector('.inputText').value;
    const cat = document.querySelector('#category').value;
    if (event.key === 'Enter') {
      dispatch(fetchdata(`${cat}/${title}`));
      document.querySelector('.sp').innerHTML = 'Searched Fruits';
    }
  };

  let count = 0;
  return (
    <div className="container">
      <div className="search">
        {bool ? (
          <>
            <div>
              <select name="category" id="category">
                <option default> select</option>
                <option value="family">Family</option>
                <option value="genus">Genus</option>
                <option value="order">Order</option>
              </select>
              <input type="text" placeholder="Enter family/Genus/Order" className="inputText" onKeyDown={() => handleSearch(event)} />
              <button
                type="button"
                onClick={() => { dispatch(fetchdata('all')); document.querySelector('.inputText').value = ''; setbool(!bool); }}
              >
                <AiFillCloseCircle />
              </button>
            </div>
            {bool ? <p className="sp" /> : ''}
          </>
        )
          : <button type="button" className="sbtn" onClick={() => setbool(!bool)}><AiOutlineSearch /></button>}
      </div>

      {data.map((record) => {
        count += 1;
        return <Item record={record} key={record.id} count={count} />;
      })}
      <div className="topbtn">
        <button className={scroll > 20 ? 'scrollbtn ' : 'scrollDown'} type="button" onClick={() => handleScroll()}><AiOutlineArrowUp /></button>
      </div>
    </div>
  );
};

export default Container;
