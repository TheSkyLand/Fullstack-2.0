import React from "react"
import { BrowserRouter as Router, Route, BrowserRouter, Routes } from "react-router-dom"
import MainPage from "../pages/MainPage"
import AboutPage from "../pages/AboutPage"
import CreatePage from "../pages/CreatePage"
import ProductPage from "../pages/ProductPage"

const RouterPage = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" Component={MainPage} />
                <Route path="/About" Component={AboutPage} />
                <Route path="/Create" Component={CreatePage} />
                <Route path="/Product/:id" Component={ProductPage} />
            </Routes>
        </Router>
    )
}

export default RouterPage