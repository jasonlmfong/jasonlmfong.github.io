import "./css/App.css";
import React from "react";
import {HashRouter, Route, Switch} from "react-router-dom";
import MainNavBar from "./components/MainNavBar";
import MainFooter from "./components/MainFooter";
import ScrollToTop from "./components/ScrollToTop";
import Homepage from "./pages/Homepage";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Pictures from "./pages/Pictures";

const pages = [
    {
        name: "Experience",
        path: "experience",
        component: Experience
    },
    {
        name: "Projects",
        path: "projects",
        component: Projects
    },
    {
        name: "Pictures",
        path: "pictures",
        component: Pictures
    },
];


function App() {
    return (
        <div className="App">
            <HashRouter>
                <MainNavBar sites={pages}/>
                <ScrollToTop/>
                <Switch>
                    <Route path="/" exact component={Homepage}/>
                    {
                        pages.map(page =>
                            <Route path={"/" + page.path}
                                   component={page.component}
                                   key={page.path}/>
                        )
                    }
                </Switch>
                <MainFooter/>
            </HashRouter>
        </div>
    );
}

export default App;
