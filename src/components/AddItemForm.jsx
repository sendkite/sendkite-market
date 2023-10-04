
function AddItemForm({
  addItem
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const item = {
      name: e.target.name.value,
      price: parseFloat(e.target.price.value),
      status: e.target.status.value,
      desc: e.target.desc.value,
      image: e.target.image.value,
    }

    addItem(item);
  };

  return (
    <form className={"fish-edit"} onSubmit={handleSubmit}>
      <input name={"name"} type="text" placeholder="Item Name" />
      <input name={"price"} type="text" placeholder="Item Price" />
      <select name={"status"}>
        <option value="available">Fresh!</option>
        <option value="unavailable">Sold Out!</option>
      </select>
      <textarea name={"desc"} placeholder="Item Desc" />
      <input name={"image"} type="text" placeholder="Item Image" />
      <button type={"submit"}>+ Add Item</button>
    </form>
  );
}

export default AddItemForm;