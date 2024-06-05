import LoginServer from './LoginServer';
import React from 'react';
import { hydrate } from 'react-dom';

hydrate(<LoginServer propVal='Rameshwaram'/>, document.getElementById('root-login'));