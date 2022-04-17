import React from 'react';
import axios from 'axios';
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
        <div>Jeans</div>
        <div>T-shirt</div>
        <div>Boots</div>
      </div>
    );
  }
}