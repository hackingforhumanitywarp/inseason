import React from 'react';
import AppRouter from './AppRouter';
import logo from './logo.svg';

class Home extends React.Component {
    render() {
        return (
            <div className="App">
                    <h1>Eat Seasonally</h1>
                    <img src={logo} className="App-logo" alt="logo" />
                    <body>Eat locally and in season to reduce your carbon footprint!
                        Eating locally reduces the carbon emissions of travel while eating in
                        season reduces the use of pesticides and is usually less expensive!</body>
            </div>
        );
    }

}


export default Home;


