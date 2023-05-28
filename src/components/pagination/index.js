import {memo, useCallback} from "react";
import {cn as bem} from '@bem-react/classname';
import useStore from "../../store/use-store";
import useSelector from "../../store/use-selector";
import './style.css';

function Pagination(){

  const store = useStore();

  const select = useSelector(state => ({
    page: state.page,
  }));

  const cn = bem('Pagination');

  const callbacks = {
    // Добавление в корзину
    toPage: useCallback(_id => store.actions.page.changePage(_id), [store])
  }

  return (
    <nav className={cn()}>
      <ul>
        <li>
          <button className={"Pagination-button Pagination-button_selected"} onClick={e => callbacks.toPage(1)}>1</button>
        </li>
        <li><span className={cn("skip")}>...</span></li>
        <li>
          <button className={cn("button")} onClick={e => callbacks.toPage(2)}>2</button>
        </li>
        <li>
          <button className={cn("button")} onClick={e => callbacks.toPage(3)}>3</button>
        </li>
        <li>
          <button className={cn("button")} onClick={e => callbacks.toPage(4)}>4</button>
        </li>
        <li><span className={cn("skip")}>...</span></li>
        <li>
          <button className={cn("button")} onClick={e => callbacks.toPage(5)}>5</button>
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
