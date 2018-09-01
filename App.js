import React from 'react';

import App from './src/App';

if (typeof global.self === 'undefined') global.self = global;

export default () => <App />;
