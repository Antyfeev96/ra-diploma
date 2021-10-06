import React, {useEffect} from 'react';
import ProductCard from "../ProductCard/ProductCard";
import { RootStateOrAny, useDispatch, useSelector} from "react-redux";
import { fetchTopSales } from 'Store/TopSales/reducer'

function MainTopSales() {
  const state = useSelector(({ topSalesReducer } : RootStateOrAny) => topSalesReducer)
  console.log({state})
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchTopSales())
  }, [dispatch])

  return (
    <section className="top-sales">
      <h2 className="text-center">Хиты продаж!</h2>
      <div className="row">
        {state.topSales.map((product: any) => <ProductCard
          key={product.id}
          src={product.images[0]}
          productName={product.title}
          cost={product.price}
          type={product.type}/>)}
      </div>
    </section>
  );
}

export default MainTopSales;