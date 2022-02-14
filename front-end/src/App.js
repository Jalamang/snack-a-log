import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Edit from "./Components/Edit/Edit";
import Nav from "./Components/Nav/Nav";
import New from "./Components/New/New";
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
  crossorigin="anonymous"
/>;

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
