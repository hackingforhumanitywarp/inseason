import logo from './logo.svg';
import './App.css';
import 'react-bootstrap';
import Dropdown from "react-bootstrap/Dropdown";
import React from "react";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";

function App() {
    return (
        <div className="App">
            <header>
            </header>
            <body className="App-header">
            <h1>Eat Seasonally</h1>
            <img src={logo} className="App-logo" alt="logo"/>
            <h2>Eat local it's good!!!</h2>
            <ButtonToolbar/>
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
            <ButtonToolbar/>
            </body>

        </div>
    );
}

export default App;
