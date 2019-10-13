import React from "react";
import AddUniversity from "./Components/AddUniversity";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Components/ShowUniversities";
import NavBar from "./Components/NavBar";
import EditUniversity from "./Components/EditUniversity";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Route path="/" exact component={Home} />
      <Route path="/add" component={AddUniversity} />
      <Route path="/edit/:id" component={EditUniversity} />
    </BrowserRouter>
  );
};

export default App;
