import React from 'react';
import logo from './logo.svg';

class Info extends React.Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1>InSeason Info</h1>
                    <h2>Why should we eat locally?</h2>
                    <img src={logo} className="App-logo" alt="logo" />
                    <body>Studies show that transport is responsible for about 11% of our food's
                    carbon emissions and that eating locally and in season can reduce the
                    average person's carbon footprint by a whooping 10%.</body>
                    <body>But the distance that food travels is not the sole measure of its environmental
                    impact.</body>
                    <body>Other ways to reduce your carbon footprint through food are choosing foods
                    whose production is carbon-efficient, such as more plant-based foods
                    and less meat, dairy and processed foods.</body>
                    <body>So overall, eating locally is both better for the environment and cheaper.
                    Why not give it a shot?</body>
                    <h4>Sources:</h4>
                    <body>http://www.worldwatch.org/node/6064</body>
                    <body>https://www.terrapass.com/eat-your-way-to-a-smaller-carbon-footprint</body>
                </header>
            </div>
        );
    }

}


export default Info;


