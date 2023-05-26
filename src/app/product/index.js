import {memo, useCallback} from 'react';
import { Link } from 'react-router-dom';
import PageLayout from "../../components/page-layout";
import Head from "../../components/head";
import BasketTool from "../../components/basket-tool";
import useStore from "../../store/use-store";
import useSelector from "../../store/use-selector";

function Product() {

    const store = useStore();

    const select = useSelector(state => ({
        list: state.catalog.list,
        amount: state.basket.amount,
        sum: state.basket.sum
      }));

    const callbacks = {
        // Открытие модалки корзины
        openModalBasket: useCallback(() => store.actions.modals.open('basket'), [store]),
      }

    return (
        <PageLayout>
            <Head title='Название товара'/>
            <div style={{'display': 'flex', 'justifyContent': 'space-between'}}>
                <Link to={'/'} style={{'padding': '20px'}}>Главная</Link>
                <BasketTool onOpen={callbacks.openModalBasket} amount={select.amount}
                    sum={select.sum} navigation={"Главная"}/>
            </div>
            <div>Описание товара</div>
        </PageLayout>
    );
}

export default Product;
