import React from "react";
import Store from "../store/appContext.jsx";
import { SmallJumbotron } from "../components/smalljumbo.jsx";
import { Filter } from "@breathecode/ui-components";
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
													{/*<Filter
														onChange={d =>
															this.setState({
																selectedLabels: d
															})
														}
														placeholder="Labels"
														options={
															store.issues
																? store.issues.assets.map(issue => {
																		{
																			issue.labels
																				? console.log(
																						[].concat(
																							actions.concatLabels(
																								issue.labels
																							)
																						)
																				  )
																				: [
																						{
																							label: "loading...",
																							value: "loading...."
																						}
																				  ];
																		}
																  })
																: [
																		{
																			label: "loading...",
																			value: "loading...."
																		}
																  ]
														}
													/>*/}
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="container">
									<div className="row">
										{store.issues
											? store.issues.assets.map((issue, index) => {
													return (
														<div key={index} className="col-12 py-5 ">
															<a
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
																	{((issue || {}).assignee || {}).login
																		? " by " + ((issue || {}).assignee || {}).login
																		: ""}
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
																	: "loading..."}
															</div>
															<hr className="my-4" />
														</div>
													);
											  })
											: "loading"}
										{store.issues
											? store.issues["breathecode-cli"].map((issue, index) => {
													return (
														<div key={index} className="col-12 py-5 ">
															<a
																href={issue["html_url"] ? issue["html_url"] : ""}
																className="h3 text-primary  text-left">
																{issue.title}
															</a>
															<p className="lead  text-left text-secondary">
																Project: <u> breathecode-cli</u>{" "}
																<i>
																	issue #
																	{issue.number +
																		" opened on " +
																		moment(issue.created_at).format(
																			"MMMM Do YYYY, h:mm:ss a"
																		)}
																	{((issue || {}).assignee || {}).login
																		? " by " + ((issue || {}).assignee || {}).login
																		: ""}
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
																	: "loading..."}
															</div>
															<hr className="my-4" />
														</div>
													);
											  })
											: "loading"}
										{store.issues
											? store.issues["content"].map((issue, index) => {
													return (
														<div key={index} className="col-12 py-5 ">
															<a
																href={issue["html_url"] ? issue["html_url"] : ""}
																className="h3 text-primary  text-left">
																{issue.title}
															</a>
															<p className="lead  text-left text-secondary">
																Project: <u> content</u>{" "}
																<i>
																	issue #
																	{issue.number +
																		" opened on " +
																		moment(issue.created_at).format(
																			"MMMM Do YYYY, h:mm:ss a"
																		)}
																	{((issue || {}).assignee || {}).login
																		? " by " + ((issue || {}).assignee || {}).login
																		: ""}
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
																	: "loading..."}
															</div>
															<hr className="my-4" />
														</div>
													);
											  })
											: "loading"}
										{store.issues
											? store.issues["projects"].map((issue, index) => {
													return (
														<div key={index} className="col-12 py-5 ">
															<a
																href={issue["html_url"] ? issue["html_url"] : ""}
																className="h3 text-primary  text-left">
																{issue.title}
															</a>
															<p className="lead  text-left text-secondary">
																Project: <u> projects</u>{" "}
																<i>
																	issue #
																	{issue.number +
																		" opened on " +
																		moment(issue.created_at).format(
																			"MMMM Do YYYY, h:mm:ss a"
																		)}
																	{((issue || {}).assignee || {}).login
																		? " by " + ((issue || {}).assignee || {}).login
																		: ""}
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
																	: "loading..."}
															</div>
															<hr className="my-4" />
														</div>
													);
											  })
											: "loading"}
										{store.issues
											? store.issues["react-components"].map((issue, index) => {
													return (
														<div key={index} className="col-12 py-5 ">
															<a
																href={issue["html_url"] ? issue["html_url"] : ""}
																className="h3 text-primary  text-left">
																{issue.title}
															</a>
															<p className="lead  text-left text-secondary">
																Project: <u> react-components</u>{" "}
																<i>
																	issue #
																	{issue.number +
																		" opened on " +
																		moment(issue.created_at).format(
																			"MMMM Do YYYY, h:mm:ss a"
																		)}
																	{((issue || {}).assignee || {}).login
																		? " by " + ((issue || {}).assignee || {}).login
																		: ""}
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
																	: "loading..."}
															</div>
															<hr className="my-4" />
														</div>
													);
											  })
											: "loading"}
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