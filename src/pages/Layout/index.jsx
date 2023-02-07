import { Outlet } from "react-router-dom"

import "./index.scss"

import Header from "../../components/Header"
import Footer from "../../components/Footer"

export default function Layout() {
  return (
    <div className="wrapper">
      <Header />
      <div className="container">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}