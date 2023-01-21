import { Outlet } from "react-router-dom"

import '../sass/pages/Layout.scss';

import Navigation from "./_partials/Navigation"
import Footer from "./_partials/Footer"

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