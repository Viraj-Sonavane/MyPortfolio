import React from 'react';
import ReactDOM from 'react-dom';
import NoteTaker from './NoteTaker';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NoteTaker />, div);
  ReactDOM.unmountComponentAtNode(div);
});