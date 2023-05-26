import {memo, useState} from "react";
import PropTypes from "prop-types";
import {cn as bem} from '@bem-react/classname';
import {numberFormat} from "../../utils";
import './style.css';

function Pagination(props){

  const cn = bem('Pagination');

  return (
    <nav className={cn()}>
      <ul>
        <li>
          <button className={cn("button")} onClick={e => alert()}>1</button>
        </li>
        <li><span Pagination-skip>...</span></li>
        <li>
          <button className={cn("button")} onClick={e => alert()}>2</button>
        </li>
        <li>
          <button className={cn("button")} onClick={e => alert()}>3</button>
        </li>
        <li>
          <button className={cn("button")} onClick={e => alert()}>4</button>
        </li>
        <li><span Pagination-skip>...</span></li>
        <li>
          <button className={cn("button")} onClick={e => alert()}>5</button>
        </li>
      </ul>
    </nav>
  );
}

// Pagination.propTypes = {
//   item: PropTypes.shape({
//     _id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//     title: PropTypes.string,
//     price: PropTypes.number
//   }).isRequired,
//   onAdd: PropTypes.func,
// };

export default memo(Pagination);
