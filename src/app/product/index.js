import {memo, useCallback, useEffect, useState} from 'react';
import { Link, useParams } from 'react-router-dom';
import PageLayout from "../../components/page-layout";
import Head from "../../components/head";
import BasketTool from "../../components/basket-tool";
import useStore from "../../store/use-store";
import useSelector from "../../store/use-selector";

function Product() {

    const params = useParams();
    const productId = params.id;

    const [product, setProduct] = useState({
        title: "Название товара",
        description: "Описание товара",
        price: 0
    });
        
    useEffect(() => {loadProduct(productId)}, [])

    const store = useStore();

    const select = useSelector(state => ({
        amount: state.basket.amount,
        sum: state.basket.sum
      }));

    const callbacks = {
        // Открытие модалки корзины
        openModalBasket: useCallback(() => store.actions.modals.open('basket'), [store]),
      }

    async function loadProduct(productId) {
        const response = await fetch('/api/v1/articles/' + productId);
        const json = await response.json();
        console.log(json["result"])
        setProduct(json["result"]);
    }

    return (
        <PageLayout>
            <Head title={product.title}/>
            <div style={{'display': 'flex', 'justifyContent': 'space-between'}}>
                <Link to={'/'} style={{'padding': '20px'}}>Главная</Link>
                <BasketTool onOpen={callbacks.openModalBasket} amount={select.amount}
                    sum={select.sum} navigation={"Главная"}/>
            </div>
            <div style={{'padding': '20px'}}>
                <p>{product.description}</p>
                <p>Цена: {product.price}</p>
            </div>
        </PageLayout>
    );
}

export default memo(Product);
