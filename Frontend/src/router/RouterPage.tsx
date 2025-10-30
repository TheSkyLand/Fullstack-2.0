import React from "react"
import { BrowserRouter as Router, Route, BrowserRouter, Routes } from "react-router-dom"
import MainPage from "../pages/MainPage"
import AboutPage from "../pages/AboutPage"

const RouterPage = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" Component={MainPage} />
                <Route path="/About" Component={AboutPage} />
            </Routes>
        </Router>
    )
}

export default RouterPage