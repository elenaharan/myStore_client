import React from 'react';

export class ProductCard extends React.Component {
  render() {
    const { product } = this.props;
    return (
      <>
        <div className='product-card'><img src={product.imagepath} /></div>
        <div className='product-card'>{product.title}</div>
        <div className='product-card'>{product.description}</div>
        <div className='product-card'>{product.price}</div>
      </>
    )    
  }
}