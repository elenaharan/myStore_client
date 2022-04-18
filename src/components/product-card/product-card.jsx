import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './product-card.css';

export class ProductCard extends React.Component {
  render() {
    const { product } = this.props;
    return (
      <Card className='card' xs={8} md={4}>
        <Card.Img className="card-image" variant="top" src={product.imagepath} />
        <Card.Body className='card-body'>
          <Card.Title className='product-title'>{product.title}</Card.Title>
          <Card.Text className='product-text'>{product.description}</Card.Text>
          <Card.Text className='product-text'>{product.price}</Card.Text>
          <Button className='button' variant='btn btn-light'>View</Button>
        </Card.Body>
      </Card>
    )    
  }
}