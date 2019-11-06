import React from 'react';



export default class Product extends React.Component {


  render() {
    return (

        <div className="product" key={this.props.product.id}>
            <img src={this.props.product.img_url} alt=""/>
            <div className="name">{this.props.product.name}</div>
        </div>
    );
  }
}