import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
//import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {RoomProvider} from "./context";

ReactDOM.render(
  <React.StrictMode>
      <RoomProvider>
          <Router>
              <App />
          </Router>
      </RoomProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


serviceWorker.unregister();
