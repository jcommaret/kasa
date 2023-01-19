import { Routes, Route, Outlet } from "react-router-dom";
import Navigation from "../components/templates/_partials/Navigation";
import Home from "../components/templates/Home";
import ErrorPage from "../components/templates/404";
import Footer from "../components/templates/_partials/Footer";

import "./App.scss"

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />    
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </>
  );
}

function Layout() {
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

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}