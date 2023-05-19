import React from "react";
import Head from "../head";
import BasketList from "../basketList";
import './style.css';

function Basket({basket, onDelete}){
  return (
    <div className='Basket'>
      <Head title='Корзина'/>
      <BasketList basket={basket} onDelete={onDelete}/>
    </div>
  )
}

export default React.memo(Basket);
