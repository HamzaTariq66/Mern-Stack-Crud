import React, { Component } from "react";
import axios from "axios";

export default class EditUniversity extends Component {
  state = {
    uni_name: "",
    description: "",
    address: ""
  };

  componentDidMount = () => {
    axios
      .get(
        "http://localhost:8000/universities/list/" + this.props.match.params.id
      )
      .then(response => {
        console.log(response.data);
        this.setState({
          uni_name: response.data.uni_name,
          description: response.data.description,
          address: response.data.address
        });
      });
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();

    const university = {
      uni_name: this.state.uni_name,
      description: this.state.description,
      address: this.state.address
    };

    console.log(university);

    axios
      .put(
        "http://localhost:8000/universities/list/" + this.props.match.params.id,
        university
      )
      .then(res => console.log(res.data));
    window.location = "/";
  };

  render() {
    return (
      <div>
        <h3>Edit University Log</h3>
        <br />
        <form onSubmit={this.onSubmit}>
          <div className="col-lg-8">
            <input
              type="text"
              className="form-control"
              placeholder="University Name"
              name="uni_name"
              value={this.state.uni_name}
              onChange={this.onChange}
            />
          </div>
          <div className="col-lg-8 mt-5">
            <input
              type="text"
              className="form-control"
              placeholder="Description"
              name="description"
              value={this.state.description}
              onChange={this.onChange}
            />
          </div>
          <div className="col-lg-8 mt-5">
            <input
              type="text"
              className="form-control"
              placeholder="Address"
              name="address"
              value={this.state.address}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Edit University"
              className="btn btn-primary mt-3 ml-3"
            />
          </div>
        </form>
      </div>
    );
  }
}
