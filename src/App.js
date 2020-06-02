import React from "react";
import { connect } from "react-redux";
import { Route, Redirect, Switch } from "react-router-dom";

import { LoginFormContainer, HomeContainer } from "./containers";

function App(props) {
  const { isAuth } = props;
  return (
    <div className="App">
      <Switch>
        <Route exact path={"/signin"} component={LoginFormContainer} />
        <Route
          path={"/"}
          render={() => (isAuth ? <HomeContainer /> : <Redirect to="/signin" />)}
        />
      </Switch>
    </div>
  );
}

export default connect((isAuth) => isAuth)(App);
