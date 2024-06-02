import React from 'react';
import ReactDOM from 'react-dom/client';
import GitProfile from './components/gitprofile.tsx';
import ReactGA from 'react-ga4';
ReactGA.initialize("G-HYDJSPVMDG");

ReactGA.send({ hitType: "pageview", page: "/", title: "Custom Title" });


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GitProfile config={CONFIG} />
  </React.StrictMode>,
);

