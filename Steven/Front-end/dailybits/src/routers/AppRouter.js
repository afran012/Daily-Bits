import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Navigate,
    Route
} from 'react-router-dom';

import App from '../components/App2';
import Login from '../components/Login';
import { PreguntasCss } from "../components/PreguntasCss";
import { PreguntasHTML } from "../components/PreguntasHtml";
import { PreguntasJs } from "../components/PreguntasJs";
import { Home } from "../containers/Home";



export const AppRouter = () => {


    return (
        <div>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Login/>} />
                    <Route exact path="/AppUser" element={<App/>} />
                    <Route path="/Preguntas" element={<Home />} />
                    <Route path="/html" element={<PreguntasHTML />} />
                    <Route path="/css" element={<PreguntasCss />} />
                    <Route path="/js" element={<PreguntasJs />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </Router>
        </div>
    )
}
