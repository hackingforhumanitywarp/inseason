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

                    <Route path="/jan_van" component={Jan_van} />
                    <Route path="/feb_van" component={Feb_van} />
                    <Route path="/mar_van" component={Mar_van} />
                    <Route path="/apr_van" component={Apr_van} />
                    <Route path="/may_van" component={May_van} />
                    <Route path="/jun_van" component={Jun_van} />
                    <Route path="/jul_van" component={Jul_van} />
                    <Route path="/aug_van" component={Aug_van} />
                    <Route path="/sep_van" component={Sep_van} />
                    <Route path="/oct_van" component={Oct_van} />
                    <Route path="/nov_van" component={Nov_van} />
                    <Route path="/dec_van" component={Dec_van} />

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


function Jan_van() {
    return <h1>Bay Leaves
        Cabbage - Red
        Cabbage - Savoy
        Carrots
        Chervil
        Kale
        Kiwi
        Leeks
        Onions - Red
        Onions - Yellow
        Parsnips
        Rosemary
        Sage
        Savoy - Winter
        Thyme</h1>
}

function Feb_van() {
    return <h1>Bay Leaves
        Chervil
        Cilantro
        Kale
        Leeks
        Onions - Red
        Onions - Yellow
        Parsnips
        Rosemary
        Sage
        Savoy - Winter
        Thyme</h1>
}

function Mar_van() {
    return <h1>Bay Leaves
        Chervil
        Chives - Garlic
        Cilantro
        Fennel - Leaf
        Kale
        Onions - Red
        Onions - Yellow
        Parsley
        Rosemary
        Sage
        Savoy - Winter
        Sorrel
        Thyme</h1>
}

function Apr_van() {
    return <h1>Asparagus,
        Bay Leaves,
        Chervil,
        Chives,
        Chives - Garlic,
        Cilantro,
        Dill - Leaf,
        Fennel - Leaf,
        Kale,
        Oregano,
        Parsley,
        Radishes,
        Rhubarb,
        Rosemary,
        Sage,
        Salad Greens,
        Savoy - Winter,
        Sorrel,
        Spinach,
        Tarragon - French,
        Thyme</h1>
}

function May_van() {
    return <h1>Asparagus
        Bay Leaves
        Chard - Swiss
        Chervil
        Chives
        Chives - Garlic
        Cilantro
        Dill - Leaf
        Fennel - Leaf
        Kale
        Mint
        Mustard Greens
        Onions - Green
        Oregano
        Parsley
        Peas
        Radishes
        Rhubarb
        Rosemary
        Sage
        Salad Greens
        Savoy - Winter
        Sorrel
        Spinach
        Tarragon - French
        Thyme
        Turnips - White</h1>
}

function Jun_van() {
    return <h1>Basil
        Bay Leaves
        Beets
        Carrots
        Cauliflower
        Celery
        Chard - Swiss
        Chives
        Chives - Garlic
        Cilantro
        Dill - Leaf
        Epazote
        Fennel
        Fennel - Leaf
        Gooseberries
        Kale
        Lavendar
        Lemon Verbena
        Lettuce
        Mint
        Mustard Greens
        Onions - Green
        Oregano
        Parsley
        Peas
        Radishes
        Rhubarb
        Rosemary
        Sage
        Salad Greens
        Saskatoon Berries
        Savoy - Summer
        Savoy - Winter
        Sorrel
        Spinach
        Squash - Summer
        Strawberries
        Tarragon - French
        Thyme
        Turnips - White
        Zucchini</h1>
}

function Jul_van() {
    return <h1>Apples
        Apricots
        Basil
        Bay Leaves
        Beans
        Beets
        Blackberries
        Broccoli
        Carrots
        Cauliflower
        Celery
        Chard - Swiss
        Cherries
        Chives
        Chives - Garlic
        Cilantro
        Corn
        Cucumbers
        Currants
        Dill - Leaf
        Epazote
        Fennel
        Fennel - Leaf
        Gooseberries
        Kale
        Lavendar
        Leeks
        Lemon Grass
        Lemon Verbena
        Lettuce
        Marjoram - Sweet
        Mint
        Mustard Greens
        Nectarines
        Onions - Green
        Oregano
        Parsley
        Potatoes - White
        Radishes
        Raspberries
        Rhubarb
        Rosemary
        Sage
        Salad Greens
        Saskatoon Berries
        Savoy - Summer
        Savoy - Winter
        Spinach
        Squash - Summer
        Strawberries
        Tarragon - French
        Thyme
        Tomatoes
        Turnips - White
        Zucchini</h1>
}

function Aug_van() {
    return <h1>Apples
        Apricots
        Artichokes
        Basil
        Bay Leaves
        Beans
        Beets
        Blackberries
        Blueberries
        Broccoli
        Cabbage - Green
        Carrots
        Cauliflower
        Celery
        Chard - Swiss
        Cherries
        Chives
        Chives - Garlic
        Cilantro
        Corn
        Crab Apples
        Cucumbers
        Dill - Leaf
        Dill - Seed
        Epazote
        Fennel
        Fennel - Leaf
        Fennel - Seed
        Garlic
        Kale
        Lavendar
        Leeks
        Lemon Grass
        Lemon Verbena
        Lettuce
        Marjoram - Sweet
        Melons
        Mint
        Mustard Greens
        Nectarines
        Onions - Green
        Onions - Red
        Onions - Yellow
        Oregano
        Parsley
        Parsnips
        Peaches
        Pears
        Peppers
        Plums
        Potatoes - Red
        Potatoes - Russet
        Potatoes - White
        Potatoes - Yellow
        Prunes
        Radishes
        Raspberries
        Rhubarb
        Rosemary
        Rutabagas
        Sage
        Salad Greens
        Savoy - Summer
        Savoy - Winter
        Shallots
        Spinach
        Squash - Summer
        Strawberries
        Tarragon - French
        Thyme
        Tomatoes
        Turnips - White
        Zucchini</h1>
}

function Sep_van() {
    return <h1>Apples
        Apricots
        Artichokes
        Asparagus
        Basil
        Bay Leaves
        Beans
        Beets
        Blackberries
        Blueberries
        Broccoli
        Brussel Sprouts
        Cabbage - Green
        Cabbage - Red
        Cabbage - Savoy
        Carrots
        Cauliflower
        Celery
        Chard - Swiss
        Cherries
        Chervil
        Chives
        Chives - Garlic
        Cilantro
        Corn
        Crab Apples
        Cranberries
        Cucumbers
        Currants
        Dill - Leaf
        Dill - Seed
        Epazote
        Fennel
        Fennel - Leaf
        Fennel - Seed
        Garlic
        Gooseberries
        Grapes
        Kale
        Kiwi
        Lavendar
        Leeks
        Lemon Grass
        Lemon Verbena
        Lettuce
        Marjoram - Sweet
        Melons
        Mint
        Mustard Greens
        Nectarines
        Onions - Green
        Onions - Red
        Onions - Yellow
        Oregano
        Parsley
        Parsnips
        Peaches
        Pears
        Peas
        Peppers
        Plums
        Potatoes - Red
        Potatoes - Russet
        Potatoes - White
        Potatoes - Yellow
        Prunes
        Pumpkin
        Quince
        Radishes
        Raspberries
        Rhubarb
        Rosemary
        Rutabagas
        Sage
        Salad Greens
        Saskatoon Berries
        Savoy - Summer
        Savoy - Winter
        Shallots
        Sorrel
        Spinach
        Squash - Summer
        Squash - Winter
        Strawberries
        Tarragon - French
        Thyme
        Tomatoes
        Turnips - White
        Zucchini</h1>
}

function Oct_van() {
    return <h1>Apples
        Apricots
        Artichokes
        Asparagus
        Basil
        Bay Leaves
        Beans
        Beets
        Blackberries
        Blueberries
        Broccoli
        Brussel Sprouts
        Cabbage - Green
        Cabbage - Red
        Cabbage - Savoy
        Carrots
        Cauliflower
        Celery
        Chard - Swiss
        Cherries
        Chervil
        Chives
        Chives - Garlic
        Cilantro
        Corn
        Crab Apples
        Cranberries
        Cucumbers
        Currants
        Dill - Leaf
        Dill - Seed
        Epazote
        Fennel
        Fennel - Leaf
        Fennel - Seed
        Garlic
        Gooseberries
        Grapes
        Kale
        Kiwi
        Lavendar
        Leeks
        Lemon Grass
        Lemon Verbena
        Lettuce
        Marjoram - Sweet
        Melons
        Mint
        Mustard Greens
        Nectarines
        Onions - Green
        Onions - Red
        Onions - Yellow
        Oregano
        Parsley
        Parsnips
        Peaches
        Pears
        Peas
        Peppers
        Plums
        Potatoes - Red
        Potatoes - Russet
        Potatoes - White
        Potatoes - Yellow
        Prunes
        Pumpkin
        Quince
        Radishes
        Raspberries
        Rhubarb
        Rosemary
        Rutabagas
        Sage
        Salad Greens
        Saskatoon Berries
        Savoy - Summer
        Savoy - Winter
        Shallots
        Sorrel
        Spinach
        Squash - Summer
        Squash - Winter
        Strawberries
        Tarragon - French
        Thyme
        Tomatoes
        Turnips - White
        Zucchini</h1>
}

function Nov_van() {
    return <h1>Apples
        Bay Leaves
        Beets
        Broccoli
        Brussel Sprouts
        Cabbage - Green
        Cabbage - Red
        Cabbage - Savoy
        Carrots
        Cauliflower
        Chard - Swiss
        Chervil
        Cilantro
        Dill - Leaf
        Epazote
        Fennel
        Kale
        Kiwi
        Leeks
        Lemon Verbena
        Lettuce
        Mint
        Mustard Greens
        Onions - Red
        Onions - Yellow
        Oregano
        Parsley
        Parsnips
        Pears
        Potatoes - Red
        Potatoes - Russet
        Potatoes - White
        Potatoes - Yellow
        Pumpkin
        Quince
        Rosemary
        Rutabagas
        Sage
        Salad Greens
        Savoy - Winter
        Sorrel
        Squash - Winter
        Thyme
        Turnips - White</h1>
}

function Dec_van() {
    return <h1>Bay Leaves
        Beets
        Brussel Sprouts
        Cabbage - Green
        Cabbage - Red
        Cabbage - Savoy
        Carrots
        Chervil
        Cilantro
        Kale
        Kiwi
        Leeks
        Onions - Red
        Onions - Yellow
        Parsnips
        Pears
        Potatoes - Red
        Potatoes - Russet
        Potatoes - White
        Potatoes - Yellow
        Rosemary
        Rutabagas
        Sage
        Savoy - Winter
        Squash - Winter
        Thyme
        Turnips - White</h1>
}


export default Produce;
