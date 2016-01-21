import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
var context = {
  title: 'hi,react'
};
ReactDOM.render(<App context={context} />, document.getElementById('root'));
