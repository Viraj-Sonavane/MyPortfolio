import React from 'react';
import ReactDOM from 'react-dom';
import Playbuddy from './Playbuddy';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Playbuddy />, div);
  ReactDOM.unmountComponentAtNode(div);
});