import React from "react";
import Store from "../store/appContext.jsx";
import { SmallJumbotron } from "../components/smalljumbo.jsx";
import { Filter, Loading } from "@breathecode/ui-components";
import { Context } from "../store/appContext.jsx";
import moment from "moment";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "../components/navbar.jsx";
import Footer from "../components/footer.jsx";


 class Contributing extends React.Component {
	constructor() {
		super();
		this.state = {
			selectedLabels: []
		};
	}

	filterByTags = issue => {
		if(this.state.selectedLabels.length == 0) return true;
		const issueLabels = issue.labels.map(l => l.name);
		for(let i = 0; i<this.state.selectedLabels.length;i++){
			if(issueLabels.includes(this.state.selectedLabels[i].value)) return true;
		}
		return false;
	}

	render() {
		return (
			<div>
				<Navbar/>
				<Context.Consumer>
					{({ store, actions }) => {

						return (
							<div>
								<SmallJumbotron
									jumboClass="jumbotron jumbotron-fluid mb-0 bg-white"
									containerClass="pl-4  container"
									headerClass="display-4 font-weight-bold  text-left"
									headerText="Assets"
									pClass="lead  text-left"
									spanClass="h3 text-secondary"
									spanContent=".md"
								/>

								<div className="row border-top border-bottom sticky-top bg-white">
									<div className="container">
										<div className="row">
											<div className="col  d-flex justify-content-start">
												<div className="px-1 pl-1 py-2">
													filter
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						);
					}}
				</Context.Consumer>
				<Footer/>
			</div>
		);
	}
}

export default Store(Contributing)