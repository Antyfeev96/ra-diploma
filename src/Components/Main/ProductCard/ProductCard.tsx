import React, {useRef} from 'react';

export interface IProduct {
  id?: number,
  src: string,
  productName: string,
  cost: number,
}

const prettify = (cost: number): string => cost.toLocaleString('ru-RU');

function ProductCard({src, productName, cost}: IProduct) {
  const cardRef = useRef<HTMLDivElement>(null)
  const parentClassName = cardRef?.current?.parentElement?.parentElement?.className
  const additionalClass: string = parentClassName === 'catalog' ? 'catalog-item-card' : ''
  return (
    <div ref={cardRef} className="col-4">
      <div className={`card ${additionalClass}`}>
        <img src={src}
             className="card-img-top img-fluid" alt={productName}/>
        <div className="card-body">
          <p className="card-text">{productName}</p>
          <p className="card-text">{prettify(cost)} руб.</p>
          <a href="/" className="btn btn-outline-primary">Заказать</a>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;