import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';


import App from '../containers/App';
import Login from '../components/Login';
import Preguntas from '../components/Preguntas';



export const AppRouter = () => {


    return (
        <div>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Login/>} />
                    <Route exact path="/App" element={<App/>} />
                    <Route exact path="/Preguntas" element={<Preguntas/>} />
                </Routes>
            </Router>
        </div>
    )
}
