import React, { Component } from 'react'
import axios from 'axios'

export default class CreateUser extends Component {

    state = {
        users: [],
        userName: ''
    }

    async componentDidMount() {
        this.getUsers();
    }

    getUsers = async () => {
        const res = await axios.get('http://localhost:4000/api/users')
        this.setState({users: res.data.message})
    }

    onChangeUserName = (e) => {
        this.setState({userName: e.target.value})
    }

    onSubmit = async e => {
        e.preventDefault(); 
        await axios.post('http://localhost:4000/api/users', {
            username: this.state.userName
        });  
        this.setState({userName: ''}); 
        this.getUsers();
    }

    deleteUser = async (id) => {
        axios.delete(`http://localhost:4000/api/users/ ${id}`);
        this.getUsers();
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-4">
                    <div className="card card-body">
                        <h3>Create New User</h3>
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Insert User name"
                                    onChange={this.onChangeUserName}
                                    value={this.state.userName}/>
                            </div>
                            <button type="submit" className="btn btn-primary">
                                Save
                            </button>
                        </form>
                    </div>
                </div>
                <div className="col-md-8">
                    <p id="p_info">Double click to delete a created user*</p>
                    <ul className="list-group">
                        {
                            this.state.users.map(user => 
                                <li 
                                    className="list-group-item list-group-item-action" 
                                    key={user._id}
                                    onDoubleClick={() => this.deleteUser(user._id)}>
                                        {user.username}
                                </li>
                            )
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
