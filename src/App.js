import React from "react";
import { Route, Switch } from "react-router-dom";
import AllMetups from "./pages/AllMetups";
import NewMeetups from "./pages/NewMeetup";
import Faverout from "./pages/FaveroutMeetup";
import MainNavigation from "./components/layout/MainNavigation";
function App() {
  return (
    <div>
      <MainNavigation />
      <Switch>
        <Route path="/" exact>
          <AllMetups />
        </Route>
        <Route path="/new-meetup">
          <NewMeetups />
        </Route>
        <Route path="/favorites">
          <Faverout />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
