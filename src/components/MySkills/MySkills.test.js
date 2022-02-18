import React from 'react';
import ReactDOM from 'react-dom';
import MySkills from './MySkills';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MySkills />, div);
  ReactDOM.unmountComponentAtNode(div);
});