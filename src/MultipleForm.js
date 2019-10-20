import React, { Component } from "react";

class MultipleForm extends Component {
	constructor(props) {
		super(props);
		this.state = { username: "", email: "", password: "" };
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleEmailChange = this.handleEmailChange.bind(this);
		this.handlePasswordChange = this.handlePasswordChange.bind(this);
	}

	handleChange(evt) {
		this.setState({ username: evt.target.value });
	}

	handleSubmit(evt) {
		evt.preventDefault();
		alert(`You typed: ${this.state.username}`);
		this.setState({ username: "" });
	}

	handleEmailChange(evt) {
		this.setState({ email: evt.target.value });
	}

	handlePasswordChange(evt) {
		this.setState({ password: evt.target.value });
	}

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<h1>Multiple Form Demo</h1>
					<input
						type='text'
						value={this.state.username}
						onChange={this.handleChange}
					/>
					<input
						type='email'
						placeholder='email'
						value={this.state.email}
						onChange={this.handleEmailChange}
					/>
					<input
						type='password'
						placeholder='password'
						value={this.state.password}
						onChange={this.handlePasswordChange}
					/>
					<button>Submit!</button>
				</form>
			</div>
		);
	}
}

export default MultipleForm;
