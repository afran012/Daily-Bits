import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';


import App from '../containers/App';
import Login from '../components/Login';



export const AppRouter = () => {


    return (
        <div>
            <Router>
                <Routes>
                    <Route exact path="/" element={<App/>} />
                    <Route exact path="/login" element={<Login/>} />
                </Routes>
            </Router>
        </div>
    )
}
