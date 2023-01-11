import React, { Component } from "react";
import {
  Route, Routes,
  NavLink,
  HashRouter
} from "react-router-dom";

import Home from "./Home";
import DaisyBelle from "./DaisyBelle";
import Sandy from "./Sandy";
import Juniper from "./Juniper";

class Main extends Component {
  render() {
    return (
    <HashRouter>
        <div>
          <h1>Shelby's Pets</h1>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/daisybelle">DaisyBelle</NavLink></li>
            <li><NavLink to="/sandy">Sandy</NavLink></li>
            <li><NavLink to="/juiper">Juniper</NavLink></li>
          </ul>
          <div className="content">
            <Routes>
                <Route path = "/" element={<Home />}/>
                <Route path = "/daisybelle" element={<DaisyBelle />}/>
                <Route path = "/sandy" element={<Sandy />}/>
                <Route path = "/juniper" element={<Juniper />}/>
            </Routes>
          </div>
        </div>
    </HashRouter>
    );
  }
}
 
export default Main;