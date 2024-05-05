import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/pages/templates/App';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import Tree from "./components/pages/basic-terms/Tree";
import TreeTabs from "./components/pages/templates/TemplateTabs";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path="/tabs" element={<TreeTabs />} /> TODO
              <Route path="/" element={<HomePage />} />
              <Route path="/zakladni-pojmy">
                  {/*<Route index={true} element={<ZakladniPojmyPage />}></Route>*/}
                  <Route path="strom" element={<Tree />} />
              </Route>
              <Route path="/test" element={<App />} /> TODO
              <Route path="/*" element={<HomePage/>} />
          </Routes>
      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
