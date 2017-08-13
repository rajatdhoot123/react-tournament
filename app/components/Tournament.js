import React, { Component } from "react";
import InputBox from "./InputBox.js";
import { displayTournament } from "../action.js";
import { connect } from "react-redux";
import axios from "axios";
import store from "../store/store.js";
import { Link } from 'react-router-dom';

class Tournament extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tour: ""
    };
    this.inputTournament = this.inputTournament.bind(this);
    this.submit = this.submit.bind(this);
  }
  componentDidMount() {
    let self = this;
    axios.get("http://192.175.7.1:5000/getAllTournament/1").then(response => {
      if (response.status == 200) {
        self.props.dispatch(displayTournament(response.data.result));
      }
    });
  }
  inputTournament(tournament_name) {
    this.setState({
      tour: tournament_name
    });
  }
  submit(event) {
    let self = this;
    event.preventDefault();
    axios
      .post("http://192.175.7.1:5000/tournament/1", this.state)
      .then(response => {
        if (response.status == 200) {
          axios.get("http://192.175.7.1:5000/getAllTournament/1").then(response => {
          if (response.status == 200) {
            self.props.dispatch(displayTournament(response.data.result));
      }
    });
        }
      });
  }
  render() {
    let self = this;
    return (
      <div>
        <div className="row">
          <div className="jumbotron text-center">
            <h1 className="header">Welcome to Swiss Tournament</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-9">
            <InputBox
              name="tour"
              value={this.state.tour}
              upState={this.inputTournament}
            />
          </div>
          <div className="col-md-3">
            <button
              className="button btn btn-block"
              type="submit"
              value="submit"
              disabled={!this.state.tour}
              onClick={this.submit}
            >
              Add Tournament
            </button>
          </div>
        </div>
        <div className="col-md-12 text-center">
          <h3>
            <b>Tournament History</b>
          </h3>
        </div>
        <div className="row">
          {!this.props.isData
            ? <div>Loading...</div>
            : <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Tournament ID</th>
                    <th>Tournament Name</th>
                    <th>Status</th>
                    <th>Winner</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    this.props.tournament_data.map(data => {
                      return (
                        <tr key={data.id}>
                          <td key={data.id}>
                            {data.id}
                          </td>
                          <td key={data.tour_name}>
                          <Link to={`/tournament_details/${data.id}/${this.props.user_id}`}>
                            {data.tour_name}
                          </Link>
                          </td>
                          <td key={data.Status}>
                            {data.Status}
                          </td>
                          <td key={data.Winner}>
                            {}
                          </td>
                        </tr>
                      );
                    },this)
                  }
                </tbody>
              </table>}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  isData: state.display_tournament.isData,
  tournament_data: state.display_tournament.tournament_data,
  user_id : state.user.id
});
export default connect(mapStateToProps)(Tournament);
