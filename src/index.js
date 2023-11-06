import React from 'react';
import ReactDOM from 'react-dom';

import { Auth0Provider } from '@auth0/auth0-react';


import App from './App';
ReactDOM.render(
  <Auth0Provider
    domain="dev-a7kldwsok84zsj7p.us.auth0.com"
    clientId="XwVc59waX28XjutcJD7SJQgp1IxyzCbx"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,

 
   
  
  
  document.getElementById('root')
);
