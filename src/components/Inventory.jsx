import AddItemForm from "./AddItemForm.jsx";

function Inventory({
  addItem,
  loadSampleItems
}) {
    return (
        <div className={"inventory"}>
          <h2>Inventory</h2>
          <AddItemForm addItem={addItem} />
          <button onClick={
            () => {
              loadSampleItems();
            }
          }>Load Sample items</button>
        </div>
    );
}

export default Inventory;