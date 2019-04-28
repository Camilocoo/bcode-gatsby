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
						const filt = store.issueLabels ? store.issueLabels.map(i => ({ label: i, value: i})):null;
						return (
							<div>
								<SmallJumbotron
									jumboClass="jumbotron jumbotron-fluid mb-0 bg-white"
									containerClass="pl-4  container"
									headerClass="display-4 font-weight-bold  text-left"
									headerText="Contributing"
									pClass="lead  text-left"
									pContent="To start contributing click one ot the issues to learn more details, use the tags to narrown your search depending on your skils"
									spanClass="h3 text-secondary"
									spanContent=".md"
								/>
								
								<div className="row border-top border-bottom sticky-top bg-white">
									<div className="container">
										<div className="row">
											<div className="col  d-flex justify-content-start">
												<div className="px-1 pl-1 py-2">
													<Filter
														label="Label"
														placeholder="Labels:"
														onChange={d =>
															this.setState({
																selectedLabels: d
															})
														}
														options={Array.isArray(filt) ? filt:[] }
														withToggler={false}
													/>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="container">
									<div className="row">
										{store.allIssues ? 
											store.allIssues.filter(this.filterByTags.bind(this)).map((issue, index) => {
													return (
														<div key={index} className="col-12 py-5 ">
															<a
																target="_blank"
																href={issue["html_url"] ? issue["html_url"] : ""}
																className="h3 text-primary  text-left">
																{issue.title}
															</a>
															<p className="lead  text-left text-secondary">
																Project: <u> Assets</u>{" "}
																<i>
																	issue #
																	{issue.number +
																		" opened on " +
																		moment(issue.created_at).format(
																			"MMMM Do YYYY, h:mm:ss a"
																		)}
																	{issue.assignee && issue.assignee.login && (" by " + issue.assignee.login)}
																</i>
															</p>
															<div className="row pl-2">
																{issue.labels
																	? issue.labels.map((label, index) => {
																			return (
																				<div
																					key={index}
																					className="col-1.5 px-2 mx-1 rounded tagsCol3">
																					{label.name}
																				</div>
																			);
																	  })
																	: <Loading/>}
															</div>
															<hr className="my-4" />
														</div>
													);
											  })
											: <Loading/>}
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