import React from "react";
import BasketHead from "../basketHead";
import BasketList from "../basketList";
import './style.css';

function Basket({basket, onDelete, basketIsOpened, onTaggle}){

  return (
    <div className={'Basket' + (basketIsOpened ? ' Basket_opened' : '')}>
      <div className='Basket-content'>
        <BasketHead title='Корзина' onTaggle={onTaggle}/>
        <BasketList basket={basket} onDelete={onDelete}/>
      </div>
    </div>
  )
}

export default React.memo(Basket);
