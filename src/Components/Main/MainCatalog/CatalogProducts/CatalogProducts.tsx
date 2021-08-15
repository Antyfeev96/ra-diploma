import React from 'react';
import ProductCard, {IProduct} from "../../ProductCard/ProductCard";

const PRODUCTS: IProduct[] = [
  {
    id: 1,
    src: "https://cdn-images.farfetch-contents.com/12/93/06/52/12930652_13567910_1000.jpg",
    productName: "Босоножки 'MYER'",
    cost: 34000
  },
  {
    id: 2,
    src: "https://cdn-images.farfetch-contents.com/12/94/66/72/12946672_13518465_1000.jpg",
    productName: "Босоножки 'Keira'",
    cost: 7600
  },
  {
    id: 3,
    src: "https://cdn-images.farfetch-contents.com/12/99/04/32/12990432_13705715_1000.jpg",
    productName: "Супергеройские кеды",
    cost: 1400
  },
  {
    id: 4,
    src: "https://cdn-images.farfetch-contents.com/12/93/06/52/12930652_13567910_1000.jpg",
    productName: "Босоножки 'MYER'",
    cost: 34000
  },
  {
    id: 5,
    src: "https://cdn-images.farfetch-contents.com/12/94/66/72/12946672_13518465_1000.jpg",
    productName: "Босоножки 'Keira'",
    cost: 7600
  },
  {
    id: 6,
    src: "https://cdn-images.farfetch-contents.com/12/99/04/32/12990432_13705715_1000.jpg",
    productName: "Супергеройские кеды",
    cost: 1400
  }
]

function CatalogProducts() {
  return (
    <div className="row">
      {PRODUCTS.map(product => <ProductCard key={product.id} src={product.src} productName={product.productName} cost={product.cost}/>)}
    </div>
  );
}

export default CatalogProducts;