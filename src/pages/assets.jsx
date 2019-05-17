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
            selectedTypeTags:[],
            selectedTechTags:[],
            selectedTopicTags:[]
		};
	}

    filterByTech = asset => {
		if (this.state.selectedTechTags.length == 0) return true;
		for (let i = 0; i < this.state.selectedTechTags.length; i++) {
			if (asset.technologies.includes(this.state.selectedTechTags[i].value)) return true;
		}
		return false;
	}
    filterByTopic = asset => {
		if (this.state.selectedTopicTags.length == 0) return true;
		for (let i = 0; i < this.state.selectedTopicTags.length; i++) {
			if (asset.topics.includes(this.state.selectedTopicTags[i].value)) return true;
		}
		return false;
	}
    filterByType = asset => {
		if (this.state.selectedTypeTags.length == 0) return true;
		for (let i = 0; i < this.state.selectedTypeTags.length; i++) {
			if (asset.types!==null?asset.types.includes(this.state.selectedTypeTags[i].value):"") return true;
		}
		return false;
	}


	render() {
		return (
			<div>
				<Navbar/>
				<Context.Consumer>
					{({ store, actions }) => {
                        console.log(store.assetTypesTags);
                        console.log(store.assetTechnologieTags);
                        console.log(store.assetTopicTags);
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
													<Filter
													label="technologie"
													placeholder="Filter By Technologie"
													onChange={d =>
														this.setState({
															selectedTechTags: d
														})
													}
													options={store.assetTechnologieTags?store.assetTechnologieTags.map((tech)=>{
                                                        return{
                                                                label: tech,
																value: tech
                                                        }
                                                    }):[{
                                                                label:"loading" ,
																value: "loading"
                                                        }]}
												    />
												</div>
                                                <div className="px-1 pl-1 py-2">
													<Filter
													label="Topic"
													placeholder="Filter By Topic"
													onChange={d =>
														this.setState({
															selectedTopicTags: d
														})
													}
													options={store.assetTopicTags?store.assetTopicTags.map((topic)=>{
                                                        return{
                                                                label: topic,
																value: topic
                                                        }
                                                    }):[{
                                                                label:"loading" ,
																value: "loading"
                                                        }]}
												    />
												</div>
                                                <div className="px-1 pl-1 py-2">
													<Filter
													label="Topic"
													placeholder="Filter By Type"
													onChange={d =>
														this.setState({
															selectedTypeTags: d
														})
													}
													options={store.assetTypesTags?store.assetTypesTags.map((type)=>{
                                                        return{
                                                                label: type,
																value: type
                                                        }
                                                    }):[{
                                                                label:"loading" ,
																value: "loading"
                                                        }]}
												    />
												</div>
											</div>
										</div>
									</div>
								</div>
                                 <div className="container">
                                 {store.assets?store.assets.filter(this.filterByTech).filter(this.filterByTopic).filter(this.filterByType).map((asset)=>{
                                     return(
                                <div>
                                    <div className="row  text-center text-md-left mt-2  p-3 paddingLeftZero">
                                        {asset.url.includes("jpg")?<div className="col-12 col-md-2 d-flex justify-content-center align-items-center">
                                            <img
                                                className="img-fluid"
                                                src={asset.url?asset.url:""}
                                            />
                                        </div>:" "}
                                        <div className="col-12 col-md pl-1">
                                            <div className="row">
                                                <div className="col-12">
                                                    <div><a href={asset.url?asset.url:""} className=" h2 text-dark">{asset.title?asset.title:"missing title"}</a></div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-12">
                                                    <small className="text-muted lead font-italic">
                                                        in the following technlogies:

                                                    </small>
                                                </div>
                                            </div>
                                            <div className="row mb-2">
                                                <div className="col-12 p-2 col-md">
                                                      {asset.technologies?asset.technologies.map((tech)=>{
                                                            return(
                                                                <span className="author badge badge-pill badge-light mr-2"> {tech}</span>
                                                            )
                                                        }):" "}
                                                </div>
                                                <div className="col-12 col-md-3 d-flex justify-content-md-end">
                                                    <div className="row mx-auto">
                                                        <div className="col-12 d-flex align-items-end">
                                                            <a href={asset.url?asset.url:""} className="btn btn-outline-primary buttonHeight  px-2 ">
                                                                View more
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="my-4" />
                                    </div>
                                     );
                                 }):<Loading/>}

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