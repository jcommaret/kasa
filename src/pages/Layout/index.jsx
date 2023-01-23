import { Outlet } from "react-router-dom"

import "./index.scss"

import Navigation from "../../components/Header"
import Footer from "../../components/Footer"

export default function Layout() {
  return (
    <div className="wrapper">
      <Navigation />
      <div className="container">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}