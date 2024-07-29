import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/pages/templates/App';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import TemplatePage from "./components/pages/templates/TemplatePage"
import pages from "./data/pages";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route key="2" path="/" element={<HomePage/>}/>
                <Route key="3" path="/test" element={<App/>}/> TODO
                <Route key="4" path="/*" element={<HomePage/>}/>


                {pages.map(page => {
                    if (page.subpages === null){
                        return <Route key={page.path} path={page.path} element={<TemplatePage page={page} subpage={null}/>}/>
                    } else {
                        return <Route key={page.path} path={page.path}>
                            {/*<Route index={true} element={<ZakladniPojmyPage/>}></Route>*/}
                            {page.subpages.map(subpage => (
                                <Route key={page.path} path={subpage.path} element={<TemplatePage page={page} subpage={subpage} />}/>
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
reportWebVitals(console.log);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
