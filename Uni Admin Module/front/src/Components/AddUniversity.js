import React, { Component } from "react";
import axios from "axios";

class AddUniversity extends Component {
  state = {
    uni_name: "",
    description: "",
    address: ""
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  editUni = e => {
    console.log(e);
  };

  onSubmit = e => {
    e.preventDefault();

    const detail = {
      uni_name: this.state.uni_name,
      description: this.state.description,
      address: this.state.description
    };

    axios
      .post("http://localhost:8000/universities/add", detail)
      .then(res => console.log(res.data));

    this.setState({
      uni_name: "",
      description: "",
      address: ""
    });
  };

  render() {
    return (
      <React.Fragment>
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
              value="Add University"
              className="btn btn-primary mt-3 ml-3"
            />
          </div>
        </form>
      </React.Fragment>
    );
  }
}

export default AddUniversity;
