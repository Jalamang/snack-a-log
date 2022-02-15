import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Edit from "./Components/Edit/Edit";
import Index from "./Components/Index/Index";
import Nav from "./Components/Nav/Nav";
import New from "./Components/New/New";
<<<<<<< HEAD
import Show from "./Components/Show/Show";

import Welcome from "./Components/Welcome/Welcome";
=======
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
  crossorigin="anonymous"
/>;
>>>>>>> dev

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
