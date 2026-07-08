import React from "react";
import Footer from "./Footer";
import ItemTotal from "../containers/ItemTotal";
import Itemdetail from "../containers/Itemdetail";
// import AddTodo from "../containers/AddTodo";
// import VisibleTodoList from "../containers/VisibleTodoList";

const App = () => (
  <div className="App container">
    <ItemTotal />
    <Itemdetail />
    {/** <Footer />*/}
  </div>
);

export default App;
