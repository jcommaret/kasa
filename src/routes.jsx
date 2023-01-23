import { Routes, Route } from "react-router-dom";
// common

// Pages 
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import ErrorPage from "./pages/404";

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