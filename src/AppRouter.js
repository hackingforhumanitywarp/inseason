import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Produce from "./Produce";
import Home from "./Home";


function AppRouter() {
    return (
        <Router>
            <div className="Router">
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/produce/">Produce</Link>
                        </li>
                        <li>
                            <Link to="/about/">About</Link>
                        </li>
                    </ul>
                </nav>

                <Route path="/" exact component={Index} />
                <Route path="/produce/" component={ProduceSelector} />
                <Route path="/about/" component={About} />

            </div>
        </Router>
    );
}

function Index() {
    return <Home/>;
}

function About() {
    return <h2>About</h2>;
}

function ProduceSelector() {
    return <Produce/>
}

export default AppRouter;
