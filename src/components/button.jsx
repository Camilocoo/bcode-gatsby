import React from "react";
import PropTypes from "prop-types";

export class Button extends React.Component {
	render() {
		return (
			<button rel="noopener" className={this.props.classNameButton} href={this.props.href}>
				{this.props.buttonText}
				<br />
				<small>{this.props.smallText}</small>
			</button>
		);
	}
}

Button.propTypes = {
	classNameButton: PropTypes.string,
	buttonText: PropTypes.string,
	smallText: PropTypes.string,
	href: PropTypes.string
};