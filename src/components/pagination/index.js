import {memo, useCallback, useEffect} from "react";
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

  useEffect(() => {
    store.actions.catalog.load();
  }, [store.page]);

  const callbacks = {
    // Добавление в корзину
    toPage: useCallback(_id => store.actions.page.changePage(_id), [store])
  }

  const lastPageNum = Math.ceil(select.page.count / select.page.limit)
  const curPage = Math.round((select.page.skip + select.page.limit) / select.page.limit)
  
  let navTemplate = null
  if (lastPageNum <= 5) {
    navTemplate = Array.from({length: lastPageNum}, (_, i) => i + 1)
  }
  else if (curPage <= 2) {
    navTemplate = [1, 2, 3, 'skip', lastPageNum]
  }
  else if (curPage == 3) {
    navTemplate = [1, 2, 3, 4, 'skip', lastPageNum]
  }
  else {
    navTemplate = [1, 'skip', curPage - 1, curPage, curPage + 1, 'skip', lastPageNum]
  }

  return (
    <nav className={cn()}>
      <ul>{
        navTemplate.map((pageNum, i) => {
          if (pageNum == "skip") {
            return <li key={i}><span className={cn("skip")}>...</span></li>
          }
          else {
            return (
            <li key={i}>
              <button className={"Pagination-button" + (pageNum == curPage ? " Pagination-button_selected" : "")}
               onClick={e => callbacks.toPage(pageNum)}>{pageNum}</button>
            </li>
            )
          }
        })}
        
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
