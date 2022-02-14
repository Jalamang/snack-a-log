import React from "react";
import { Routes, Route } from "react-router-dom";
import Edit from "./Components/Edit/Edit";
import Nav from "./Components/Nav/Nav";
import New from "./Components/New/New";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route />
        <Route />
        <Route path="/snacks/new" element={<New />} />
        <Route path="/snacks/:id/edit" element={<Edit />} />
      </Routes>
    </div>
  );
}

export default App;
