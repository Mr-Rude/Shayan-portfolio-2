import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

// Same load order as the original site: base, structure, effects, then mobile overrides.
import './styles/styles.css';
import './styles/structure.css';
import './styles/effects.css';
import './styles/mobile.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
