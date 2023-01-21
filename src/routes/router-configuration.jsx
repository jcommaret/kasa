import { Routes, Route } from "react-router-dom";
// common

// Pages 
import Layout from "../components/templates/Layout";
import Home from "../components/templates/Home";
import ErrorPage from "../components/templates/404";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="kasa" element={<Home />} />    
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </>
  );
}