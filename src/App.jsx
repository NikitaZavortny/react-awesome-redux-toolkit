import React from 'react';

import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes} from "react-router-dom";

import "./bootstrap.css";
import "./curves.css";
import HomePage from './design/pages/home-page.jsx';
import ReduxToolkit from './design/pages/redux-toolkit.jsx';

function App() {
  return (
    <div align="center">

      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.0/css/all.css" />
      <script defer src="https://use.fontawesome.com/releases/v5.1.0/js/all.js"></script>

      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/redux-toolkit" element={<ReduxToolkit />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
