import React, { Component } from "react";
import { Container, Col } from "reactstrap";

export default class OptimizePlex extends Component {
	render() {
		return (
			<div>
				<br />
				<Container>
					<div>
						<h2>Optimize Your Plex</h2>
						<hr />
					</div>
					<div>
						<Col sm={12}>
							<p>
								Sometimes Plex doesn't set your video quality to
								the highest setting. Follow the steps below for
								the best watching experience!
							</p>
							<ol>
								<li>
									Navigate to{" "}
									<a
										href="https://app.plex.tv/desktop"
										target="__blank"
									>
										Plex
									</a>{" "}
									and login
								</li>
								<li>
									Once logged in you will see the Plex
									desktop. In the top right you will see the
									Settings, click on it. (It looks like a
									screwdriver and wrench)
								</li>
								<li>
									On the left hand menu you will see some
									categories. Under 'Web Client', you will see
									'Quality'. Click on that.
								</li>
								<li>
									Locate the 'Video Quality' setting. Click
									the dropdown and select 'Maximum'.
								</li>
								<li>
									Click 'Save Changes' and you're ready to
									watch!
								</li>
							</ol>
						</Col>
					</div>
				</Container>
			</div>
		);
	}
}
