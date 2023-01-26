import { Routes, Route } from "react-router-dom"

import Layout from "../pages/Layout"
import Home from "../pages/Home"
import ErrorPage from "../pages/404"
import About from "../pages/About"
import LogementDetails from "../pages/LogementDetails"

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="kasa" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="logement/:id" element={<LogementDetails />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </>
  )
}
