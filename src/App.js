import React from "react";
import Layout from "./Layout";
import Landing from "./components/Landing";
// import Todos from "./components/Todos";

import { BrowserRouter, Routes, Route, } from "react-router-dom";

import './App.scss';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Landing/>} />
          {/* <Route path="/todos" element={<Todos/>} /> */}
        </Route>
      </Routes> 
    </BrowserRouter>
  );
}
