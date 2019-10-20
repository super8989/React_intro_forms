import React, { Component } from "react";

class MultipleForm extends Component {
	constructor(props) {
		super(props);
		this.state = { username: "" };
	}

	render() {
		return (
			<div>
				<form>
					<h1>Multiple Form Demo</h1>
					<input />
					<button>Submit!</button>
				</form>
			</div>
		);
	}
}

export default MultipleForm;
