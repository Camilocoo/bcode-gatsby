import React from "react";
import Store from "../store/appContext.jsx";
import { SmallJumbotron } from "../components/smalljumbo.jsx";
import { Filter, Loading } from "@breathecode/ui-components";
import { Context } from "../store/appContext.jsx";
import moment from "moment";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "../components/navbar.jsx";
import Footer from "../components/footer.jsx";
import { Link } from "gatsby"


 class Contributing extends React.Component {
	constructor() {
		super();
		this.state = {

		};
	}


	render() {
		return (
			<div>
				<Navbar/>
				<Context.Consumer>
					{({ store, actions }) => {
                            console.log(store.assets);
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
                                 <div className="container">
                                    <div className="row  text-center text-md-left mt-2  p-3">
                                        <div className="col-12 col-md-2 d-flex justify-content-center align-items-center">
                                            <img
                                                className="img-fluid"

                                            />
                                        </div>
                                        <div className="col-12 col-md">
                                            <div className="row">
                                                <div className="col-12">
                                                    <div><p className=" h2 text-dark">asdfasdf</p></div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-12">
                                                    <small className="text-muted lead font-italic">
                                                        in the following technologies:
                                                        <span className="linkDecoration">
                                                            &nbsp;
                                                            asdfasdf
                                                        </span>
                                                    </small>
                                                </div>
                                            </div>
                                            <div className="row mb-2">
                                                <div className="col-12 p-2 col-md">
                                                    <span className="author badge badge-pill badge-light mr-2"> dfas</span>
                                                    <span className="author badge badge-pill badge-light mr-2">asdfr</span>
                                                    <span className="author badge badge-pill badge-light mr-2">With Video</span>
                                                </div>
                                                <div className="col-12 col-md-3 d-flex justify-content-md-end">
                                                    <div className="row mx-auto">
                                                        <div className="col-12 d-flex align-items-end">
                                                            <Link className="btn btn-outline-primary buttonHeight  px-2 ">
                                                                README.md
                                                            </Link>
                                                        </div>
                                                    </div>
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