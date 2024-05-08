import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/pages/templates/App';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import TreeTabs from "./components/pages/templates/TemplateTabs";
import TemplatePage from "./components/pages/templates/TemplatePage"
import pages from "./data/pages";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/tabs" element={<TreeTabs/>}/> TODO
                <Route path="/" element={<HomePage/>}/>
                <Route path="/test" element={<App/>}/> TODO
                <Route path="/*" element={<HomePage/>}/>


                {pages.map(page => {
                    if (page.subpages === null){
                        return <Route path={page.path} element={<TemplatePage/>}/>
                    } else {
                        return <Route path={page.path}>
                            {/*<Route index={true} element={<ZakladniPojmyPage/>}></Route>*/}
                            {page.subpages.map(subpage => (
                                <Route path={subpage.path} element={<TemplatePage/>}/>
                            ))}
                        </Route>
                    }
                    })}

                {/*<Route path="/zakladni-pojmy">*/}
                {/*<Route index={true} element={<ZakladniPojmyPage />}></Route>*/}
                {/*<Route path="strom" element={<Tree />} />*/}
                {/*</Route>*/}

            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
