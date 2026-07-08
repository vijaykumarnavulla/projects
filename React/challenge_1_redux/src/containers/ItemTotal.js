import { connect } from "react-redux";
import { toggleTodo } from "../actions";
import ItemTotalTemplate from "../components/ItemTotalTemplate";
// import { VisibilityFilters } from '../actions';

const getVisibleTodos = (props, filter) => {
  let modifiedprops = { ...props };
  modifiedprops.total =
    parseFloat(props.subtotal.replace("$", "")) +
    parseFloat(props.pickupsavings.replace("$", "")) +
    parseFloat(props.esttax.replace("$", ""));
  modifiedprops.total = "$" + modifiedprops.total;
  console.log(JSON.stringify(modifiedprops.total));
  return modifiedprops;
};

const mapStateToProps = state => ({
  props: getVisibleTodos(state.cartReducer.itemcost, state.visibilityFilter)
});

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemTotalTemplate);
