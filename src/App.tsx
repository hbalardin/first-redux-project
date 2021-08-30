import React from 'react';
import { Provider } from 'react-redux';
import { Cart } from './components/Cart';
import { Catalog } from './components/Catalog';
import { Header } from './components/Header';
import { store } from './store';

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Catalog />
      <Cart />
    </Provider>
  );
}

export default App;
