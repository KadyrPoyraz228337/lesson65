import React from 'react';
import './App.css';
import Navigation from "./Components/Navigation/Navigation";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import {Container} from "reactstrap";
import Page from "./Components/Page/Page";


function App() {
  return (
    <div>
        <Router>
            <Navigation/>
            <Container>
                <Switch>
                    <Route path='/' exact component={Page}/>
                    <Route path='/:pageName' component={Page}/>
                </Switch>
            </Container>
        </Router>
    </div>
  );
}

export default App;