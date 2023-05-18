import React from "react";
import PropTypes from 'prop-types';
import './style.css';

function Controls({onAdd, basketLen}){
  return (
    <div className='Controls'>
      <div className='ControlsStat'>В корзине: <span>{basketLen ? basketLen : 'пусто'}</span></div>
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
