import React from "react"
import { Outlet } from "react-router-dom"
import Header from "../pages/Header"
import Footer from "../pages/Footer"

export default function Layout() {
    return (
        <div className="site-wrapper">
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}