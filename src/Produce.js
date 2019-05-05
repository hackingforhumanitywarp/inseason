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
                    <Route path="/feb_sea" component={Feb_sea} />
                    <Route path="/mar_sea" component={Mar_sea} />
                    <Route path="/apr_sea" component={Apr_sea} />
                    <Route path="/may_sea" component={May_sea} />
                    <Route path="/jun_sea" component={Jun_sea} />
                    <Route path="/jul_sea" component={Jul_sea} />
                    <Route path="/aug_sea" component={Aug_sea} />
                    <Route path="/sep_sea" component={Sep_sea} />
                    <Route path="/oct_sea" component={Oct_sea} />
                    <Route path="/nov_sea" component={Nov_sea} />
                    <Route path="/dec_sea" component={Dec_sea} />

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
    const list = "Acorn Squash \n Apples\n" +
        "Beets\n" +
        "Brussel Sprouts\n" +
        "Butternut Squash\n" +
        "Carrots\n" +
        "Celeriac/Celery Root\n" +
        "Chards\n" +
        "Garlic\n" +
        "Hubbard Squash\n" +
        "Kale\n" +
        "Leeks\n" +
        "Mint\n" +
        "Mizuna\n" +
        "Onions (yellow/storage)\n" +
        "Oregano\n" +
        "Parsley\n" +
        "Parsnips\n" +
        "Pears\n" +
        "Potatoes\n" +
        "Pumpkins\n" +
        "Rosemary\n" +
        "Sage\n" +
        "Sunchokes\n" +
        "Sweet Potatoes/Yams";
    return <h1>{list}</h1>;
}

function Feb_sea() {
    return <h1>Acorn Squash
        Apples
        Beets
        Brussel Sprouts
        Butternut Squash
        Carrots
        Celeriac/Celery Root
        Chards
        Garlic
        Hubbard Squash
        Kale
        Leeks
        Mint
        Mizuna
        Onions (yellow/storage)
        Oregano
        Parsnips
        Pears
        Potatoes
        Rosemary
        Sage
        Sunchokes
        Sweet Potatoes/Yams</h1>
}

function Mar_sea() {
    return <h1>Acorn Squash
        Apples
        Beets
        Brussel Sprouts
        Butternut Squash
        Carrots
        Celeriac/Celery Root
        Chards
        Garlic
        Hubbard Squash
        Kale
        Leeks
        Mint
        Mizuna
        Onions (yellow/storage)
        Oregano
        Parsnips
        Pears
        Potatoes
        Rapini
        Rosemary
        Sage
        Sunchokes
        Sweet Potatoes/Yams</h1>
}

function Apr_sea() {
    return <h1>Apples
        Asparagus
        Beets
        Bok Choy (baby)
        Carrots
        Chards
        Garlic
        Green Onions/Scallions/Chives
        Kale
        Leeks
        Mint
        Mizuna
        Mustard Greens
        Oregano
        Parsnips
        Pears
        Potatoes
        Radishes
        Rapini
        Rhubarb
        Rosemary
        Sage
        Spinach
        Sunchokes
        Turnips</h1>
}

function May_sea() {
    return <h1>Apples
        Arugula
        Asparagus
        Beets
        Beet (green)
        Bok Choy (baby)
        Carrots
        Chards
        Cilantro/Coliander
        Collard Greens
        Garlic
        Green Onions/Scallions/Chives
        Green Peas (snap/snow)
        Lettuce
        Mint
        Mizuna
        Mustard Greens
        Oregano
        Pears
        Pea Vines
        Potatoes
        Radishes
        Rapini
        Rhubarb
        Rosemary
        Sage
        Spinach
        Strawberries
        Sunchokes
        Turnips</h1>
}

function Jun_sea() {
    return <h1>Apples
        Apricots
        Artichokes
        Arugula
        Asparagus
        Beets
        Beet green
        Blackberries
        Bok Choy (baby)
        Broccoli
        Cabbage (napa)
        Carrots
        Cauliflower
        Chards
        Cherries
        Cilantro/Coliander
        Collard Greens
        Cucumber
        Endive (Curly/Fresee)
        Escarole
        Fennel
        Garlic
        Green Onions/Scallions/Chives
        Green Peas (snap/snow)
        Kohlrabi (greens)
        Kohlrabi (root)
        Lettuce
        Mint
        Mustard Greens
        Nectarines
        Onions (sweet)
        Oregano
        Peaches
        Pears
        Pea Vines
        Plums
        Radicchio
        Radishes
        Raspberries
        Rhubarb
        Rosemary
        Sage
        Spinach
        Strawberries
        Summer squash (white scallop/yellow)
        Tomatillos
        Turnips
        Watercress
        Zucchini
    </h1>
}

function Jul_sea() {
    return <h1>Apples
        Apricots
        Aritchokes
        Arugula
        Basil
        Beets
        Beet green
        Blackberries
        Blueberries
        Bok Choy (baby)
        Broccoli
        Cabbage (green/red/savoy)
        Cabbage (napa)
        Carrots
        Cauliflower
        Chards
        Cherries
        Cilantro/Coliander
        Collard Greens
        Corn
        Cucumber
        Currants
        Dill
        Endive (Curly/Fresee)
        Escarole
        Fennel
        Garlic
        Green Beans
        Green Onions/Scallions/Chives
        Green Peas (shell)
        Green Peas (snap/snow)
        Kale
        Kohlrabi (greens)
        Kohlrabi (root)
        Lettuce
        Mint
        Mustard greens
        Nectarines
        Onions (yellow/storage)
        Onions (sweet)
        Oregano
        Parsley
        Peaches
        Pears
        Pea Vines
        Peppers (sweet)
        Plums
        Radicchio
        Radishes
        Raspberries
        Rhubarb
        Rosemary
        Sage
        Spinach
        Strawberries
        Summer squash (white scallop/yellow)
        Tomatillos
        Tomatoes
        Turnips
        Watercress
        Zucchini</h1>
}

function Aug_sea() {
    return <h1>
        Apples
        Apricots
        Artichokes
        Arugula
        Basil
        Beets
        Beet green
        Blackberries
        Blueberries
        Bok Choy (baby)
        Broccoli
        Cabbage (green/red/savoy)
        Cabbage (napa)
        Cantaloupes
        Carrots
        Cauliflower
        Chards
        Cherries
        Cilantro/Coliander
        Collard Greens
        Corn
        Cucumber
        Currants
        Dill
        Endive (Curly/Fresee)
        Escarole
        Fennel
        Garlic
        Grapes
        Green Beans
        Green Onions/Scallions/Chives
        Green Peas (shell)
        Green Peas (snap/snow)
        Honeydew melon
        Kale
        Kohlrabi (greens)
        Kohlrabi (root)
        Lettuce
        Mint
        Mustard greens
        Nectarines
        Onions (yellow/storage)
        Onions (sweet)
        Oregano
        Parsley
        Peaches
        Pears
        Pea Vines
        Peppers (sweet)
        Plums
        Pluots
        Potatoes
        Radicchio
        Radishes
        Raspberries
        Rhubarb
        Rosemary
        Sage
        Spinach
        Strawberries
        Summer squash (white scallop/yellow)
        Tomatillos
        Tomatoes
        Turnips
        Watercress
        Watermelon
        Zucchini

    </h1>
}

function Sep_sea() {
    return <h1>Acorn Squash
        Apples
        Artichokes
        Arugula
        Asian pears
        Basil
        Beets
        Beet green
        Blueberries
        Bok Choy (baby)
        Broccoli
        Buternut squash
        Cabbage (green/red/savoy)
        Cabbage (napa)
        Cataloupes
        Carrots
        Cauliflower
        Celery
        Chards
        Cilantro/Coliander
        Collard Greens
        Corn
        Cucumber
        Currants
        Dill
        Endive (Curly/Fresee)
        Escarole
        Fennel
        Garlic
        Grapes
        Green Beans
        Green Onions/Scallions/Chives
        Green Peas (shell)
        Honeydew melon
        Hubbard squash
        Kale
        Kohlrabi (greens)
        Kohlrabi (root)
        Leeks
        Lettuce
        Mint
        Mustard greens
        Nectarines
        Onions (yellow/storage)
        Onions (sweet)
        Oregano
        Parsley
        Peaches
        Pears
        Peppers (sweet)
        Plums
        Pluots
        Potatoes
        Pumpkins
        Quinces
        Radicchio
        Radishes
        Rapini
        Rosemary
        Sage
        Spinach
        Strawberries
        Summer squash (white scallop/yellow)
        Sweet potatoes (yams)
        Tomatillos
        Tomatoes
        Turnips
        Watermelon
        Zucchini</h1>
}

function Oct_sea() {
    return <h1>Acorn Squash
        Apples
        Artichokes
        Arugula
        Asian pears
        Beets
        Beet green
        Bok Choy (baby)
        Broccoli
        Brussel Sprouts
        Buternut squash
        Cabbage (green/red/savoy)
        Cabbage (napa)
        Carrots
        Cauliflower
        Celeriac/Celery Root
        Celery
        Chards
        Cilantro/Coliander
        Collard Greens
        Corn
        Cucumber
        Dill
        Endive (Curly/Fresee)
        Escarole
        Fennel
        Garlic
        Grapes
        Green Beans
        Green Peas (shell)
        Hubbard squash
        Kale
        Kohlrabi (greens)
        Kohlrabi (root)
        Leeks
        Lettuce
        Mint
        Mizuna
        Mustard greens
        Onions (yellow/storage)
        Oregano
        Parsley
        Parsnips
        Pears
        Peppers (sweet)
        Potatoes
        Pumpkins
        Quinces
        Radicchio
        Radishes
        Rapini
        Rosemary
        Sage
        Spinach
        Summer squash (white scallop/yellow)
        Sunchokes
        Sweet potatoes (yams)
        Tomatillos
        Tomatoes
        Turnips
        Watermelon
        Zucchini</h1>
}

function Nov_sea() {
    return <h1>Acorn Squash
        Apples
        Asian pears
        Beets
        Bok Choy (baby)
        Broccoli
        Brussel Sprouts
        Buternut squash
        Cabbage (green/red/savoy)
        Carrots
        Cauliflower
        Celeriac/Celery Root
        Chards
        Cilantro/Coliander
        Collard Greens
        Escarole
        Fennel
        Garlic
        Grapes
        Hubbard squash
        Kale
        Kohlrabi (greens)
        Kohlrabi (root)
        Leeks
        Lettuce
        Mint
        Mizuna
        Mustard greens
        Onions (yellow/storage)
        Oregano
        Parsley
        Parsnips
        Pears
        Potatoes
        Pumpkins
        Quinces
        Radicchio
        Radishes
        Rapini
        Rosemary
        Sage
        Spinach
        Sunchokes
        Sweet potatoes (yams)
        Tomatoes</h1>
}

function Dec_sea() {
    return <h1>Acorn Squash
        Apples
        Beets
        Bok Choy (baby)
        Brussel Sprouts
        Buternut squash
        Cabbage (green/red/savoy)
        Carrots
        Celeriac/Celery Root
        Chards
        Collard Greens
        Escarole
        Garlic
        Hubbard squash
        Kale
        Kohlrabi (greens)
        Leeks
        Mint
        Mizuna
        Mustard greens
        Onions (yellow/storage)
        Oregano
        Parsley
        Parsnips
        Pears
        Potatoes
        Pumpkins
        Quinces
        Rosemary
        Sage
        Spinach
        Sunchokes
        Sweet potatoes (yams)</h1>
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
