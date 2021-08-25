import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProfileForm from "./components/ProfileForm";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Profile from "./components/Profile";

export default function App() {
  return (
    <Router>
      <>
        <NavBar />

        <Switch>
          <Route exact path="/ds-task">
            <ProfileForm />
          </Route>
          <Route path="/ds-task/profiles/:profileId">
            <Profile />
          </Route>
        </Switch>
        <Footer />
      </>
    </Router>
  );
}
