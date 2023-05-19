import React from "react";
import PropTypes from 'prop-types';
import './style.css';

function Controls({onAdd, basket}){
  let amount = basket.reduce((acc, item) => acc + item.price, 0)

  return (
    <div className='Controls'>
      <div className='ControlsStat'>В корзине: <span>{basket.length ? `${basket.length} товаров / ${amount} ₽` : 'пусто'}</span></div>
      <button onClick={() => onAdd()}>Перейти</button>
    </div>
  )
}

Controls.propTypes = {
  onAdd: PropTypes.func
};

Controls.defaultProps = {
  onAdd: () => {}
}

export default React.memo(Controls);
