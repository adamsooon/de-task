import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TableComponent from "./components/TableComponent";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

export default function App() {
  return (
    <Router>
      <>
        <NavBar />

        <Switch>
          <Route path="/">
            <TableComponent />
          </Route>
        </Switch>
        <Footer />
      </>
    </Router>
  );
}
