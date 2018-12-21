import React, { Component } from "react";
import { Card, CardText, CardBody, CardTitle, Button } from "reactstrap";

import "./Card.css";

export default class SiteCard extends Component {
	followLinkExternal(url) {
		window.location = url;
	}

	render() {
		return (
			<Card
				body
				inverse
				style={{ backgroundColor: "#333", borderColor: "#333" }}
			>
				<CardBody>
					<CardTitle className="text-center">
						{this.props.title}
					</CardTitle>
				</CardBody>
				<div className="row text-center">
					<img
						src={this.props.imgSrc}
						style={{ width: "50%", height: "50%" }}
						className="center-block"
						alt=""
					/>
				</div>
				<CardBody>
					<CardText
						dangerouslySetInnerHTML={{ __html: this.props.text }}
					/>
					<Button
						className="btn-block"
						onClick={() => this.followLinkExternal(this.props.url)}
					>
						{this.props.btnText}
					</Button>
				</CardBody>
			</Card>
		);
	}
}
