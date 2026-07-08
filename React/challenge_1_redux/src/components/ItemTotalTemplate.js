import React from "react";
// import PropTypes from "prop-types";
// import Todo from "./Todo";

const ItemTotalTemplate = ({ props, toggleTodo }) => (
  <div className="ml-10">
    <div className="row">
      <div className="col-8 text-left p-0">
        <span className="detaillabel">Subtotal</span>
      </div>
      <div className="col-4 text-right p-0">
        <span className="detaillvalue">{props.subtotal}</span>
      </div>
    </div>
    <div className="row">
      <div className="col-8 text-left p-0">
        <span className="detaillabel text-underling">PickUp Savings</span>
      </div>
      <div className="col-4 text-right p-0">
        <span className="detaillvalue clr-r">{props.pickupsavings}</span>
      </div>
    </div>
    <div className="row">
      <div className="col-8 text-left p-0">
        <span className="detaillabel">Est.taxes & fees</span>
        <br />
        <span className="detaillabel">(Based on 94085)</span>
      </div>
      <div className="col-4 text-right p-0">
        <span className="detaillvalue">{props.esttax}</span>
      </div>
    </div>
    <hr />
    <div className="row">
      <div className="col-8 text-left p-0">
        <span className="detaillabel detailtotal">Est.total</span>
      </div>
      <div className="col-4 text-right p-0">
        <span className="detaillvalue totalvalue">{props.total}</span>
      </div>
    </div>
  </div>
);
export default ItemTotalTemplate;
