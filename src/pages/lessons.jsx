import React from "react";
import { SmallJumbotron } from "../components/smalljumbo.jsx";
import { Filter } from "@breathecode/ui-components";
import { Context } from "../store/appContext.jsx";
import Store from "../store/appContext.jsx";
import Navbar from "../components/navbar.jsx";
import Footer from "../components/footer.jsx";



export class Lessons extends React.Component {
	constructor() {
		super();
		this.state = {
			selectedTags: [],
			selectedAuthors: []
		};
	}

	filterTags = l => {
		if (this.state.selectedTags.length == 0) return true;
		for (let i = 0; i < this.state.selectedTags.length; i++) {
			if (l.tags.includes(this.state.selectedTags[i].value)) return true;
		}
		return false;
	};
	filterAuthors = l => {
		if (this.state.selectedAuthors.length == 0) return true;
		for (let i = 0; i < this.state.selectedAuthors.length; i++) {
			if (l.authors == null) {
				return false;
			}
			if (l.authors.includes(this.state.selectedAuthors[i].value)) return true;
		}
		return false;
	};

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
									headerText="Lessons Published"
									pClass="lead  text-left"
									pContent="the following lessons explain different programing
										concepts and have been published by breathe code
										members, search for a partiulars lesson using the
										filters bellow"
								/>
								<div className="row sticky-top bg-white border-top border-bottom">
									<div className="container">
										<div className="row">
											<div className="col-12  d-flex justify-content-start ">
												<div className="px-1 py-2">
													<Filter
														label="Tags"
														placeholder="Select one or more tags"
														onChange={d =>
															this.setState({
																selectedTags: d
															})
														}
														options={actions.filterTags(store.tags).map((tag, index) => {
															return {
																label: tag,
																value: tag
															};
														})}
													/>
												</div>
												<div className="px-1 pl-1 py-2">
													<Filter
														label="Author"
														placeholder="Author:"
														onChange={d =>
															this.setState({
																selectedAuthors: d
															})
														}
														options={actions.filterTags(store.authors).map(author => {
															return {
																label: author,
																value: author
															};
														})}
														withToggler={false}
													/>
												</div>
											</div>
										</div>
									</div>
								</div>

								{store.lessons
									.filter(this.filterAuthors)
									.filter(this.filterTags)
									.map((lesson, index) => {
										return (
											<div className="container" key={index}>
												<div className="row">
													<div className="col-12  py-3">
														<div className="pl-3">
															<a
																className="h2 text-dark btn-default"
																href={actions.lessonUrl(lesson.slug)}>
																{lesson.title}
															</a>
															<div className="row">
																<div className="col py-2 text-dark">
																	{lesson.authors
																		? "Contributors: " + "@" + lesson.authors
																		: " "}
																</div>
															</div>
															<p className="lead text-dark ">{lesson.subtitle}</p>
															<div className="row pl-2">
																{lesson.tags.map((tag, index) => {
																	return (
																		<div
																			key={index}
																			className="col-1.5 px-2 mx-1 rounded tagsCol3">
																			{tag}
																		</div>
																	);
																})}
															</div>
														</div>
													</div>
												</div>
												<hr className="my-4 " />
											</div>
										);
									})}
							</div>
						);
					}}
				</Context.Consumer>
				<Footer/>
			</div>
		);
	}
}

export default Store(Lessons) 