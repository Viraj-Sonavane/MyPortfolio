import React from 'react';
import ReactDOM from 'react-dom';
import Cube from './Cube';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Cube />, div);
  ReactDOM.unmountComponentAtNode(div);
});