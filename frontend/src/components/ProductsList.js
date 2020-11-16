import React, { Component } from "react";
import axios from "axios";
import { format } from 'timeago.js';
import { Link } from "react-router-dom";

export default class ProductsList extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    this.getProducts();
  }

  onDeleteProduct = async (id) => {
    await axios.delete(`http://localhost:4000/api/products/${id}`);
    this.getProducts();

  }

  getProducts = async () => {
    const res = await axios.get("http://localhost:4000/api/products");
    this.setState({ products: res.data.message });
  }

  render() {
    return (
      <div className="row">
        {this.state.products.map((product) => (
          <div className="col-md-4 p-2" key={product._id}>
            <div className="card">
              <div className="card-header d-flex justify-content-between">
                <h5>{product.title}</h5>
                <Link className="btn btn-primary" to={`/edit/${product._id}`}>Edit</Link>
              </div>
              <div className="card-body">
                <p>{product.description}</p>
                <p>{product.author}</p>
                <p>{format(product.date)}</p>
              </div>
              <div className="card-footer">
                  <button className="btn btn-danger" onClick={() => this.onDeleteProduct(product._id)}>Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
