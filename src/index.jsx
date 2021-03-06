import React from 'react';
import ReactDOM from 'react-dom';
import { MainView } from './components/main-view/main-view';

//Import statement to bundle index.scss
import './index.css';

//Main component (will eventually use all the others)
class MyStoreApplication extends React.Component {
  render() {
    return (
      <MainView />
    );
  }
}

//Finds the root of the app
const container = document.getElementsByClassName('app-container')[0];

//Tells React to render app in the root DOM element
ReactDOM.render(React.createElement(MyStoreApplication), container);