import React, { Component } from 'react'

export default class FilterObject extends Component {
    constructor(){
        super()
        this.state ={
            employees: [
                {
                    name:"Person one",
                    title: "noob",
                    age: 400,
                },
                {
                    name: "person two",
                    age: 3393,
                    hairColor: "blue i guess"
                },
                {
                    name: "mads",
                    title: "game lord"
                }
            ],
            userInput: "",
            filteredEmployees: []
        }
    }
    handleChange(val) {
        this.setState({ userInput: val });
      }
      filterEmployees(prop) {
          let employees = this.state.employees;
          let filteredEmployees = [];

    }
    render() {
        return (
          <div className="puzzleBox filterObjectPB">
            <h4> Filter Object </h4>
            <span className="puzzleText"> Original: { JSON.stringify(this.state.employees, null, 10) } </span>
            <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
            <button className="confirmationButton" onClick={ () => this.filterEmployees(this.state.userInput) }> Filter </button>
            <span className="resultsBox filterObjectRB"> Filtered: { JSON.stringify(this.state.filteredEmployees, null, 10) } </span>
          </div>
        )
      }
}