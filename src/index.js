import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import { combineReducers, createStore } from 'redux';
import cartReducer from './reducers/cartReducer';
import loginReducer from './reducers/loginReducer';

const mainRed = combineReducers({cartReducer,loginReducer})
const store = createStore(mainRed); 

ReactDOM.render( 
      <React.StrictMode>
        <Provider store={store}>
          <App />
        </Provider>
      </React.StrictMode>,
  document.getElementById('root')
);