import React from 'react-dom';
import Home from "./components/Home";
import Logging from "./components/Logging";
import Register from "./components/Register";
import {Route, HashRouter as Router, Switch} from "react-router-dom";


const App = () => {
  return (
    <div className="App">
        <Router>
            <Switch>
                <Route exact path='/' render={Home} />
                <Route exact path='/logging' render={Logging} />
                <Route exact path='/register' render={Register} />
            </Switch>
        </Router>
    </div>
  );
};

export default App;
