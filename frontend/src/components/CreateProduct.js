import React, { Component, cloneElement } from "react";
import axios from "axios";
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

export default class CreateProduct extends Component {
  state = {
    users: [],
    userSelected: '',
    title: '',
    description: '',
    date: new Date(),
    editing: false,
    _id: ''
  };

  async componentDidMount() {
    const id = this.props.match.params.id;
    const users = await this.getUsers();
    if (id) {
      this.getProduct(id);
      this.setState({
      editing: true,
      _id: id
    });
  }
  }

  getProduct = async (id) => {
    const res = await axios.get(`http://localhost:4000/api/products/${id}`);
    const { title, description, date, author } = res.data.message;
    this.setState({
      title,
      description,
      date: new Date(date),
      author
    })
  }

  getUsers = async () => {
    const res = await axios.get("http://localhost:4000/api/users");
    this.setState({ 
        users: res.data.message.map((user) => user.username),
        userSelected: !!res.data.message.length ? res.data.message[0].username : '' 
    });
  };

  onSubmit = async (e) => {
    e.preventDefault();
    const newProduct = {
      title: this.state.title,
      description: this.state.description,
      date: this.state.date,
      userSelected: this.state.userSelected
  };
  let res = '';
    if (this.state.editing) {
      res = await axios.put(`http://localhost:4000/api/products/${this.state._id}`, newProduct);
    } else {
      res = await axios.post("http://localhost:4000/api/products", newProduct);
    }
    if (res.status === 200) window.location.href = '/';
  };

  onInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onChangeDate = date => {
    this.setState({date})
  }

  render() {
    return (
      <div className="col-md-6 offset-md-3">
        <div className="card card-body">
          <h4>Create a Product</h4>
          <p id="p_info">Create a user first is needed*</p>
          {/**
           * SELECT USER
           *
           */}
          <div className="form-group">
            <select
              className="form-control"
              name="userSelected"
              onChange={this.onInputChange}
              value={this.state.userSelected}
            >
              {this.state.users.map((user) => (
                <option key={user} value={user}>
                  {user}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Title"
              title="title"
              name="title"
              required
              onChange={this.onInputChange}
              value={this.state.title}
            />
          </div>

          <div className="form-group">
            <textarea
              name="description"
              className="form-control"
              placeholder="Insert description here..."
              onChange={this.onInputChange}
              value={this.state.description}
            ></textarea>
          </div>

          <div className="form-group">
            <DatePicker 
                className="form-control"
                selected={this.state.date}
                onChange={this.onChangeDate}
                value={this.state.date}
                />
          </div>
          <form onSubmit={this.onSubmit}>
            <button className="btn btn-success">Save a product</button>
          </form>
        </div>
      </div>
    );
  }
}
