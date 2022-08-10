import React from 'react';
import Image from 'next/image';
const Id = ({ product }) => {
  if (product) {
    return (
      <div>
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        {product.images.map(el => {
          return (
            <Image
              key={el}
              src={el}
              layout={'intrinsic'}
              objectFit="contain"
              height={500}
              width={500}
              alt="product image"
            />
          );
        })}
      </div>
    );
  } else {
    return <h1>NOT FOUND...</h1>;
  }
};

export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: '1' } },
      { params: { id: '2' } },
      { params: { id: '3' } },
      { params: { id: '4' } },
    ],
    fallback: 'blocking',
  };
}

export async function getStaticProps(context) {
  let product = null;
  try {
    const jsonData = await fetch(
      `https://dummyjson.com/products/${context.params.id}`
    );
    product = await jsonData.json();
  } catch (err) {}

  return {
    props: {
      product,
    },
  };
}

export default Id;
