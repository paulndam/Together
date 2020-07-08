import React, { Component } from "react";

class Person extends Component {
  constructor(props) {
    super(props);
    this.state = { age: props.age };
    // const { firstname, lastname } = this.props;
    // const { age } = this.state;
    // const { haircolor } = this.props;
  }

  changeAge = () => {
    this.setState({ age: this.state.age + 1 });
  };

  render() {
    const { firstname, lastname } = this.props;
    const { age } = this.state;
    const { haircolor } = this.props;
    return (
      <fieldset>
        <div>
          <h2>
            Name:{this.props.firstname} {this.props.lastname}
          </h2>
          <h5>Age: {this.state.age}</h5>
          <h5>Hair color: {this.props.haircolor}</h5>
        </div>
        <p>your age suddenly went up by {this.state.age}</p>
        <button className="btn btn-primary" onClick={this.changeAge}>
          change age
        </button>
      </fieldset>
    );
  }
}

export default Person;
