import React from 'react';
import axios from 'axios';
import { ProductCard } from '../product-card/product-card';
import './main-view.css';

export class MainView extends React.Component {
  constructor() {
    super();
    this.state = {
      products: []
    }
  }
  
  componentDidMount() {
    axios.get('https://my-practice-api.herokuapp.com/products')
     .then(response => {
       this.setState({
         products: response.data
       });
       console.log(response.data);
     })
     .catch(error => {
       console.log(error);
     });
  }
  render() {
    const { products } = this.state;
    console.log(products);

    return (
      <div className='main-view'>
        {products.map(product => <ProductCard key={product.title} product={product} />)}
      </div>
    );
  }
}