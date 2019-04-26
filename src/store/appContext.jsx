import React from "react";
import getState from "./store.js";

export const Context = React.createContext(null);

const Store = PassedComponent => {
	class StoreWrapper extends React.Component {
		constructor(props) {
			super(props);
			this.state = getState({
				getStore: () => this.state.store,
				setStore: updatedStore =>
					this.setState({
						store: Object.assign(this.state.store, updatedStore)
					})
			});
		}

		componentDidMount() {
			fetch("http://assets.breatheco.de/apis/lesson/all/v2?status=published")
				.then(res => res.json())
				.then(lessons => {
					let { store } = this.state;
					store.lessons = lessons;
					store.tags = lessons.map(l => l.tags).flat();
					store.authors = lessons.map(l => l.authors).flat();
					this.setState({
						store
					});
				});

			fetch("http://assets.breatheco.de/apis/event/all?status=published&location=downtown-miami&status=upcoming")
				.then(res => res.json())
				.then(events => {
					let { store } = this.state;
					store.events = events;
					this.setState({
						store
					});
				});

			fetch("https://raw.githubusercontent.com/breatheco-de/main-documentation/master/README.md")
				.then(res => res.text())
				.then(markdown => {
					let { store } = this.state;
					store.markdown = markdown;
					this.setState({
						store
					});
				});
			fetch("http://assets.breatheco.de/apis/github/issues/all")
				.then(res => res.json())
				.then(issues => {
					let { store } = this.state;
					store.issues = issues;
					this.setState({
						store
					});
				});
		}

		render() {
			return (
				<Context.Provider value={this.state}>
					<PassedComponent {...this.props} />
				</Context.Provider>
			);
		}
	}
	return StoreWrapper;
};

export default Store;
