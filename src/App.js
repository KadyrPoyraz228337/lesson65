import React from 'react';
import './App.css';
import Navigation from "./Components/Navigation/Navigation";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import {Container} from "reactstrap";


function App() {
  return (
    <div>
        <Router>
            <Navigation/>
            <Container>

            </Container>
        </Router>
    </div>
  );
}

export default App;