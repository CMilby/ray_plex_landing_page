import React, { Component } from "react";
import { Col, Row, Container } from "reactstrap";

import "./Home.css";
import Card from "./Card";

import PlexLogo from "./assets/plex-logo.png";
import RequestLogo from "./assets/request.png";
import GearLogo from "./assets/gear.png";

import Properties from "./properties.json";

export default class App extends Component {
	render() {
		return (
			<div>
				<Container>
					<Row>
						<br />
					</Row>
					<Row>
						<Col sm="4">
							<Card
								title={Properties.home_card_1_title}
								imgSrc={PlexLogo}
								text={Properties.home_card_1_text}
								btnText={Properties.home_card_1_btn_text}
								url={Properties.home_card_1_btn_link}
							/>
						</Col>
						<Col sm="4">
							<Card
								title={Properties.home_card_2_title}
								imgSrc={RequestLogo}
								text={Properties.home_card_2_text}
								btnText={Properties.home_card_2_btn_text}
								url={Properties.home_card_2_btn_link}
							/>
						</Col>
						<Col sm="4">
							<Card
								title={Properties.home_card_3_title}
								imgSrc={GearLogo}
								text={Properties.home_card_3_text}
								btnText={Properties.home_card_3_btn_text}
								url={Properties.home_card_3_btn_link}
							/>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}
