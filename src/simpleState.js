import React, { Component } from 'react'

class State extends Component{
	constructor(){
		super()
		this.state = {
			counter: 0
		}
		this.handleClick = this.handleClick.bind(this)
	}

	handleClick(){
		this.setState({
			counter: this.state.counter + 1
		})
	}
	render(){
		return(
			<div>
				<label>{this.state.counter}</label>
				<button onClick={this.handleClick}>Click me</button>
			</div>
		)
	}
}

export default State