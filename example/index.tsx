import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {Thing} from '..';

const App = () => (
  <div>
    <Thing />
  </div>
);

ReactDOM.render(<App />, document.querySelector('#root'));
