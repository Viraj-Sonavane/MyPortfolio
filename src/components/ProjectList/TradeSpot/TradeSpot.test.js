import React from 'react';
import ReactDOM from 'react-dom';
import TradeSpot from './TradeSpot';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TradeSpot />, div);
  ReactDOM.unmountComponentAtNode(div);
});