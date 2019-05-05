import React from "react";
import AppRouter from "./AppRouter";
import logo from "./logo.svg";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Dropdown from "react-bootstrap/Dropdown";

class Produce extends React.Component {
    render() {
        return (
            <div className="App">
                <h1>Eat local it's good!!!</h1>
                <ButtonToolbar/>
                <div className="Buttons">
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-city">
                        City
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Seattle</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Vancouver</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-month">
                        Month
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">January</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">February</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">March</Dropdown.Item>
                        <Dropdown.Item href="#/action-4">April</Dropdown.Item>
                        <Dropdown.Item href="#/action-5">May</Dropdown.Item>
                        <Dropdown.Item href="#/action-6">June</Dropdown.Item>
                        <Dropdown.Item href="#/action-7">July</Dropdown.Item>
                        <Dropdown.Item href="#/action-8">August</Dropdown.Item>
                        <Dropdown.Item href="#/action-9">September</Dropdown.Item>
                        <Dropdown.Item href="#/action-10">October</Dropdown.Item>
                        <Dropdown.Item href="#/action-11">November</Dropdown.Item>
                        <Dropdown.Item href="#/action-12">December</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                </div>
                <ButtonToolbar/>

    </div>
        );
    }
}

export default Produce;
