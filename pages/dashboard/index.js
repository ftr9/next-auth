import React from 'react';
import Image from 'next/image';
import Router from 'next/router';
const index = ({ product }) => {
  const onProductClick = id => {
    Router.push(`/jsonplaceholder/${id}`);
  };

  return (
    <div className="main">
      {product.map(el => (
        <div
          href={el.id}
          key={el.id}
          className="productData"
          onClick={() => onProductClick(el.id)}
        >
          <h2>{el.title}</h2>
          <p>{el.description}</p>
          <Image
            src={el.images[0]}
            height={200}
            width={200}
            objectFit={'contain'}
            layout={'intrinsic'}
            alt="product"
          />
        </div>
      ))}
    </div>
  );
};

export async function getServerSideProps(context) {
  const jsonData = await fetch('https://dummyjson.com/products');
  const result = await jsonData.json();
  return {
    props: {
      product: result.products,
    },
  };
}

export default index;
