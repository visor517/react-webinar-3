import React from "react";
import PropTypes from 'prop-types';
import {plural} from "../../utils";
import './style.css';

function Controls({onTaggle, basket}){
  let amount = basket.reduce((acc, item) => acc + item.price * item.quantity, 0)

  return (
    <div className='Controls'>
      <div className='ControlsStat'>В корзине: <span>{basket.length ? `${basket.length} товаров / ${amount} ₽` : 'пусто'}</span></div>
      <button onClick={() => onTaggle()}>Перейти</button>
    </div>
  )
}

Controls.propTypes = {
  onTaggle: PropTypes.func
};

Controls.defaultProps = {
  onTaggle: () => {}
}

export default React.memo(Controls);
