import React, { Component } from "react";

export class Course extends Component {
  clicker() {
    var active = !this.state.active;
    this.setState({
      active: active
    });
    this.props.sumPrice(active ? this.props.price : -this.props.price);
  }
  constructor(props) {
    super(props);

    this.state = {
      active: false
    };
    this.clicker = this.clicker.bind(this);
  }

  render() {
    return (
      <div>
        <p className={this.state.active ? "active" : ""} onClick={this.clicker}>
          {this.props.name} : <b>{this.props.price} $</b>
        </p>
      </div>
    );
  }
}

export default Course;
