import React, {useCallback} from 'react';
import List from "./components/list";
import Controls from "./components/controls";
import Head from "./components/head";
import PageLayout from "./components/page-layout";
import Basket from './components/basket';

/**
 * Приложение
 * @param store {Store} Хранилище состояния приложения
 * @returns {React.ReactElement}
 */
function App({store}) {

  const list = store.getState().list;
  const basket = store.getState().basket;

  const callbacks = {
    // открываем карзину
    onSelectItem: useCallback((code) => {
      store.selectItem(code);
    }, [store]),

    // добавляем в карзину
    onAddItem: useCallback((item) => {
      store.addItem(item);
    }, [store]),

    // удаляем из корзины
    onDeleteItem: useCallback((code) => {
      store.deleteItem(code);
    }, [store])
  }

  return (
    <PageLayout>
      <Head title='Магазин'/>
      <Controls onAdd={callbacks.onAddItem} basket={basket} />
      <List list={list} onAdd={callbacks.onAddItem}/>
      <Basket basket={basket} onDelete={callbacks.onDeleteItem}/>
    </PageLayout>
  );
}

export default App;
