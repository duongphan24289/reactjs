import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import DMM from './DMM';

ReactDOM.render(<DMM />, document.getElementById('root'));
registerServiceWorker();
