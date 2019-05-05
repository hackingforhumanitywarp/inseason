import React from "react";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Dropdown from "react-bootstrap/Dropdown";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import DropdownButton from "react-bootstrap/DropdownButton";


class Produce extends React.Component {
    constructor(props) {
        super(props);
        this.state = {city: "Vancouver"};

    }


    render() {
        return (
            <div className="App">
                <h1>Eat local it's good!!!</h1>
                <ButtonToolbar/>
                <Router>
                <div className="Buttons">
                    <nav>
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-seattle">
                            Seattle
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Link to ="/jan_sea">January</Link>
                            <Link to ="/feb_sea">February</Link>
                            <Link to ="/mar_sea">March</Link>
                            <Link to ="/apr_sea">April</Link>
                            <Link to ="/may_sea">May</Link>
                            <Link to ="/jun_sea">June</Link>
                            <Link to ="/jul_sea">July</Link>
                            <Link to ="/aug_sea">August</Link>
                            <Link to ="/sep_sea">September</Link>
                            <Link to ="/oct_sea">October</Link>
                            <Link to ="/nov_sea">November</Link>
                            <Link to ="/dec_sea">December</Link>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-vancouver">
                            Vancouver
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Link to ="/jan_van">January</Link>
                            <Link to ="/feb_van">February</Link>
                            <Link to ="/mar_van">March</Link>
                            <Link to ="/apr_van">April</Link>
                            <Link to ="/may_van">May</Link>
                            <Link to ="/jun_van">June</Link>
                            <Link to ="/jul_van">July</Link>
                            <Link to ="/aug_van">August</Link>
                            <Link to ="/sep_van">September</Link>
                            <Link to ="/oct_van">October</Link>
                            <Link to ="/nov_van">November</Link>
                            <Link to ="/dec_van">December</Link>
                        </Dropdown.Menu>
                    </Dropdown>
                        </nav>

                    <Route path="/jan_sea" component={Jan_sea} />
                    <Route path="/feb_sea" component={Feb} />
                    <Route path="/mar_sea" component={Mar} />
                    <Route path="/apr_sea" component={Apr} />
                    <Route path="/may_sea" component={May} />
                    <Route path="/jun_sea" component={Jun} />
                    <Route path="/jul_sea" component={Jul} />
                    <Route path="/aug_sea" component={Aug} />
                    <Route path="/sep_sea" component={Sep} />
                    <Route path="/oct_sea" component={Oct} />
                    <Route path="/nov_sea" component={Nov} />
                    <Route path="/dec_sea" component={Dec} />

                </div>
                </Router>

                </div>


        );
    }

}

function Jan_sea() {
    return <h1>Seattle</h1>
}

function Feb() {
    // todo
}

function Mar() {
    // todo
}

function Apr() {
    // todo
}

function May() {
    // todo
}

function Jun() {
    // todo
}

function Jul() {
    // todo
}

function Aug() {
    // todo
}

function Sep() {
    // todo
}

function Oct() {
    // todo
}

function Nov() {
    // todo
}

function Dec() {
    // todo
}


export default Produce;
