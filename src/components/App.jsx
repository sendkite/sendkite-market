import Header from "./Header.jsx";
import Order from "./Order.jsx";
import Inventory from "./Inventory.jsx";
import {useState} from "react";
import items from "../SampleItem.jsx";
import Item from "./Item.jsx";

function App() {

  const [itemList, setItemList] = useState(
    {
      items: {},
      order: {}
    }
  );

  const addItem = (item) => {
    const items = {...itemList.items};
    items[`item${Date.now()}`] = item;
    setItemList({
      items: items,
    });

  }

  const loadSampleItems = () => {
    setItemList({
      items: items,
    });
  }

  return (
    <div className={"catch-of-the-day"}>
      <div className={"menu"}>
        <Header tagline={"Sendkite Market"}/>
        <ul className={"fishes"}>
          {Object.keys(itemList.items).map(key => <Item key={key} details={itemList.items[key]}/>)}
        </ul>
      </div>
      <Order/>
      <Inventory addItem={addItem} loadSampleItems={loadSampleItems} />
    </div>
  );
}

export default App;
