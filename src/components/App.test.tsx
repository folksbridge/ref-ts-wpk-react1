/* tslint:disable-next-line  */
import * as React from 'react';
import * as ReactDom from 'react-dom';

import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDom.render(<App message="Hello" />, div);
  ReactDom.unmountComponentAtNode(div);
});
