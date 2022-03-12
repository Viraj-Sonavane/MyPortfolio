import React from 'react';
import ReactDOM from 'react-dom';
import Wanderlust from './Wanderlust';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Wanderlust />, div);
  ReactDOM.unmountComponentAtNode(div);
});