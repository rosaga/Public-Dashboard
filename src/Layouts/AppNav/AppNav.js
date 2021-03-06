import React, { useContext } from 'react'
import { AppContext } from '../../Contexts/AppContext/AppContext'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function AppNav(props) {
    const { appName } = useContext(AppContext)
    return (
        
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">{appName}</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/">Mother Child Health Dashboard</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/DiseaseSurveilance">Disease Surveillance Dashboard</Link>
                            </li>
                         

                        </ul>
                    </div>
                </div>
            </nav>
       
    )
}

export default AppNav
