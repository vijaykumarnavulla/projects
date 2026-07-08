import React, { Component } from "react";
import { connect } from "react-redux";

class Auth extends Component {
  state = { isSignup: false };
  toggleCollapse() {
    this.setState({ isSignup: !this.state.isSignup });
  }
  render() {
    if (this.state.isSignup)
      return (
        <div>
          <div
            className="row detail-heading"
            onClick={this.toggleCollapse.bind(this)}
          >
            Exapnd item details +
          </div>
          <hr />
        </div>
      );
    if (!this.state.isSignup)
      return (
        <div>
          <div
            className="row detail-heading"
            onClick={this.toggleCollapse.bind(this)}
          >
            Hide item details -
          </div>
          <div className="row">
            <div className="col-3">
              <img className="img-widht" src={this.props.itemdetails.img} />
            </div>
            <div className="col-9 text-left word-break">
              {this.props.itemdetails.name}
              <div className="row">
                <div className="col-6 font-bold">
                  {this.props.itemdetails.cost}
                </div>
                <div className="col-6">Qty:{this.props.itemdetails.qty}</div>
              </div>
              <div className="row">
                <div className="col-6">
                  {this.props.itemdetails.actualprice}
                </div>
                <div className="col-6" />
              </div>
            </div>
          </div>
          <hr />
        </div>
      );
  }
}

const mapStateToProps = state => {
  return {
    itemdetails: state.cartReducer.itemdetail
  };
  // return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth);
