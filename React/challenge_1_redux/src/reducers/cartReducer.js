const tooltipStr = `Picking up your order in the store helps cut costs, and 
we pass the savings on to you.`;
const itemcost = {
  subtotal: "$102.96",
  pickupsavings: "-$3.85",
  tooltip: tooltipStr,
  esttax: "$8.92",
  esttotal: "$108.03",
  discount: 0
};

const itemdetail = {
  img:
    "http://i5.walmartimages.com/asr/2d19bf36-43d6-49e1-bf5a-d922effd77c3_1.8ea87c7dc46425df08a890e03db460d0.jpeg?odnWidth=100&odnHeight=100&odnBg=ffffff",
  name: "Essential by OFM ESS-3085 Racing Style Leather Gaming Chair,Red",
  cost: "$99.11",
  qty: 1,
  actualprice: "$102.96"
};
const promo = { code: "" };

const defaultData = {
  itemcost: itemcost,
  itemdetail: itemdetail,
  promo: promo
};

const cartReducer = (state = defaultData, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];
    case "TOGGLE_TODO":
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    default:
      return state;
  }
};

export default cartReducer;
