import React from 'react';
import logo from './logo.svg';

function Home() {
    return (
        <div className="content">
                <p>Välkommen till min me-sida, gjord med hjälp av JavaScript-ramverket <a href="https://reactjs.org/"> React</a></p>
                <img src={logo} className="App-logo" alt="logo" />
                <p>Jag heter Anton Johansson och går sista året på programmet <i>Webbprogg.</i>
                <br />På min fritid så gymmar jag, lagar mat, lär mig guitarr och målar med acrylfärg. </p>
        </div>
    )
}

export default Home