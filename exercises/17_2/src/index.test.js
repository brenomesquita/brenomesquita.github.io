import React from 'react';
import { createStore, combineReducers } from 'redux';
import reducer from './reducer';
import { render, cleanup } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom/extend-expect';

const renderWithRedux = (
  component,
  { initialState, store = createStore(combineReducers({ reducer }), initialState) } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  }
}

describe('testing clicks', () => {
  beforeEach(cleanup);
  test('the page should has a button and a text 0', () => {
    const { queryByText, getByText } = renderWithRedux(<App />);
    const buttonAdicionar = queryByText('clique');

    expect(buttonAdicionar).toBeInTheDocument();
    expect(getByText('0')).toBeInTheDocument();
  });
});

