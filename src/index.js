import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'emotion'
import App from './components/App/App';
import createStore from './redux/createStore';
import registerServiceWorker from './registerServiceWorker';

injectGlobal`
  * {
    box-sizing: border-box;
  }
  
  html, body {
    height: 100%;
  }
  
  body {
    margin: 0;
    padding: 0;
    font-family: Helvetica, Arial, sans-serif;
  }
  
  #root {
    height: 100%;
  }
`;

const store = createStore();
ReactDOM.render(<App store={store} />, document.getElementById('root'));
registerServiceWorker();
