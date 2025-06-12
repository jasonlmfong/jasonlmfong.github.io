import "./css/App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import MainNavBar from "./components/MainNavBar";
import MainFooter from "./components/MainFooter";
import ScrollToTop from "./components/ScrollToTop";
import Homepage from "./pages/Homepage";
import Projects from "./pages/Projects";
import Pictures from "./pages/Pictures";

const pages = [
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
        <Router>
            <MainNavBar sites={pages}/>
            <ScrollToTop/>
            <Routes>
                <Route path="/" element={<Homepage />} />
                {
                    pages.map(page =>
                    <Route path={"/" + page.path} element={<page.component />} key={page.path}/>
                    )
                }
            </Routes>
            <MainFooter/>
        </Router>
    );
  }

export default App;
