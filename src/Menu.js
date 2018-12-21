import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";

import OptimizePlex from "./OptimizePlex";
import Home from "./Home";

import Properties from "./properties.json";

export default class Menu extends Component {
	render() {
		return (
			<div>
				<Navbar className="navbar-header" expand="md">
					<NavbarBrand href="/" className="navbar-link">
						{Properties.menu_title}
					</NavbarBrand>
				</Navbar>

				<Router>
					<div>
						<Route path="/" exact component={Home} />
						<Route
							path="/optimize_plex"
							exact
							component={OptimizePlex}
						/>
					</div>
				</Router>
			</div>
		);
	}
}
