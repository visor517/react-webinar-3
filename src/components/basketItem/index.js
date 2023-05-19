import React, {useState} from "react";
import PropTypes from "prop-types";
import './style.css';

function BasketItem(props){

  const callbacks = {
    onDelete: (e) => {
      e.stopPropagation();
      props.onDelete(props.item.code);
    }
  }

  return (
    <div className='BasketItem'>
      <div className='BasketItem-code'>{props.item.code}</div>
      <div className='BasketItem-title'>{props.item.title}</div>
      <div className='BasketItem-price'>{props.item.price} ₽</div>
      <div className='BasketItem-quantity'>{props.item.quantity} шт</div>
      <div className='BasketItem-actions'>
        <button onClick={callbacks.onDelete}>Удалить</button>
      </div>
    </div>
  );
}

BasketItem.propTypes = {
  BasketItem: PropTypes.shape({
    code: PropTypes.number,
    title: PropTypes.string
  }).isRequired,
  onAdd: PropTypes.func
};

BasketItem.defaultProps = {
  onAdd: () => {},
}

export default React.memo(BasketItem);
