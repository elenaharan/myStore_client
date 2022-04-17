import React from 'react';
import axios from 'axios';
import './main-view.css';

export class MainView extends React.Component {
  render() {
    return (
      <div className='main-view'>
        <div>Jeans</div>
        <div>T-shirt</div>
        <div>Boots</div>
      </div>
    );
  }
}