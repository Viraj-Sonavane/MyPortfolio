import React from 'react';
import ReactDOM from 'react-dom';
import MyWork from './MyWork';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MyWork />, div);
  ReactDOM.unmountComponentAtNode(div);
});