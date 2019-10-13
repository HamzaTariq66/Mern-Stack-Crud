import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Home extends Component {
  state = {
    lists: []
  };

  componentDidMount() {
    axios.get("http://localhost:8000/universities/list").then(list => {
      console.log(list.data);
      this.setState({
        lists: list.data
      });
    });
  }

  deleteUniversity = e => {
    axios
      .delete("http://localhost:8000/universities/list/" + e)
      .then(res => console.log(res.data));
    this.setState({
      lists: this.state.lists.filter(el => el._id !== e)
    });
  };

  render() {
    const { lists } = this.state;
    return (
      <React.Fragment>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">University Name</th>
              <th scope="col">Description</th>
              <th scope="col">Address</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {lists.map(list => (
              <tr key={list._id}>
                <td>{list.uni_name}</td>
                <td>{list.description}</td>
                <td>{list.address}</td>
                <td>
                  <Link to={"/edit/" + list._id}>edit</Link> |{" "}
                  <button
                    className="btn btn-danger"
                    onClick={() => this.deleteUniversity(list._id)}
                  >
                    delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <br />
        <br />
      </React.Fragment>
    );
  }
}

export default Home;
