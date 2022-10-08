import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Item from '../component/Item';
import Li from '../component/Li';
import Container from '../component/Container';

const fruit = {
  genus: 'Fragaria',
  name: 'Strawberry',
  id: 3,
  family: 'Rosaceae',
  order: 'Rosales',
  nutritions: {
    carbohydrates: 5.5,
    protein: 0,
    fat: 0.4,
    calories: 29,
    sugar: 5.4,
  },
};

test('Demo test', () => {
  expect((1 + 2)).toBe(3);
});

test('renders container Component', () => {
  const con = render(
    <BrowserRouter>
      <Provider store={store}>
        <Container />
      </Provider>
    </BrowserRouter>,
  );
  expect(con).toMatchSnapshot();
});

test('renders Item Component', () => {
  const item = render(
    <BrowserRouter>
      <Provider store={store}>
        <Item record={fruit} key={fruit.id} count={0} />
      </Provider>
    </BrowserRouter>
    ,
  );
  expect(item).toMatchSnapshot();
});

test('renders LI Component', () => {
  const li = render(
    <Provider store={store}>
      <Li nutritions={fruit.nutritions} />
    </Provider>,
  );
  expect(li).toMatchSnapshot();
});
