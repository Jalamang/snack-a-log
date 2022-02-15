import React from "react";
import { Routes, Route } from "react-router-dom";
import Edit from "./Components/Edit/Edit";
import Index from "./Components/Index/Index";
import Nav from "./Components/Nav/Nav";
import New from "./Components/New/New";
import Show from "./Components/Show/Show";

import Welcome from "./Components/Welcome/Welcome";

function App() {
  return (
    <div className="App">
      {" "}
      <Nav />
      <main>
        <Routes>
          <Route exact path="/" element={<Welcome />} />
          <Route path="/snacks" element={<Index />} />
          <Route path="/snacks/:id/" element={<Show />} />
          <Route path="/snacks/new" element={<New />} />
          <Route path="/snacks/:id/edit" element={<Edit />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
