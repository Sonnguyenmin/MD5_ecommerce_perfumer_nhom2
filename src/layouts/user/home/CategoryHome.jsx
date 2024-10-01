import React from 'react';
import { Link } from 'react-router-dom';

const products = [
  { id: 1, imageUrl: '/vperfume/sliceunder/3.webp', link: '/' },
  { id: 2, imageUrl: '/vperfume/sliceunder/5.webp', link: '/' },
  { id: 3, imageUrl: '/vperfume/sliceunder/8.webp', link: '/' },
  { id: 4, imageUrl: '/vperfume/sliceunder/7.webp', link: '/' },
  { id: 5, imageUrl: '/vperfume/sliceunder/1.webp', link: '/' },
  { id: 6, imageUrl: '/vperfume/sliceunder/4.webp', link: '/' },
];

export default function CategoryHome() {
  return (
    <section className="newsProduct apps_content">
      <div className="grid wide">
        <div className="product">
          <div className="rows sm-gutter">
            {products.map((product) => (
              <div className="cols l-2 medium-4 c-4" key={product.id}>
                <div className="product_item">
                  <Link
                    to={product.link}
                    className="product_item-brand"
                    style={{ backgroundImage: `url(${product.imageUrl})` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
