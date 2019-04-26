import React, { Component } from "react";
import Store from "../store/appContext.jsx";


export class Footer extends Component {
	render() {
		return (
			<div>
				<footer className="footer gradientFooter">
					<div className="container-fluid pt-5">
						<div className="row d-flex justify-content-around">
							<div className="col-4 text-left">Contact Us</div>
							<div className="col-4 text-center">Donations</div>
							<div className="col-4 text-right">
								<a>Spanish</a>
								<br />
								<a>English</a>
							</div>
						</div>
						<div className="row text-center">
							<div className="col-12">
								Copyright ©{" "}
								<script type="text/javascript">document.write(new Date().getFullYear());</script>. All
								right reserved
							</div>
						</div>
					</div>
				</footer>
			</div>
		);
	}
}

export default Store(Footer)