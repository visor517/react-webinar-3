import React from "react";
import PropTypes from 'prop-types';
import BasketItem from "../basketItem";
import './style.css';

function BasketList({basket, onDelete}){
  return (
    <div className='BasketList'>{
      basket.map(item =>
        <div key={item.code} className='BasketList-item'>
          <BasketItem item={item} onDelete={onDelete} />
        </div>
      )}
    </div>
  )
}

BasketList.propTypes = {
  basket: PropTypes.arrayOf(PropTypes.shape({
    code: PropTypes.number
  })).isRequired,
  onDeleteItem: PropTypes.func
};

BasketList.defaultProps = {
  onDelete: () => {},
}

export default React.memo(BasketList);
