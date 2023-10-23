import "../index.scss";

function Inventories({
  inventories,
  qty,
  selectedInventories,
  setInventoryQTY,
  setSelectedInventory,
}) {
  console.log(qty);

  function addItem(inventory) {
    // this is the part where issue 4 belongs | this will handle the qty exceeded state
    let contains = selectedInventories.some(
      (item) => item.name === inventory.name
    );
    if (selectedInventories.length >= qty && !contains) {
      alert("Quantity limit exceeded");
      return;
    }

    if (!contains) {
      setSelectedInventory([...selectedInventories, inventory]);
    } else {
      setSelectedInventory(
        selectedInventories.filter((item) => item.name !== inventory.name)
      );
    }
  }
  return (
    <div className="inventories">
      <div className="qty_select">
        <h4>Select inventory quantity</h4>
        <select
          name="inventory"
          id="inventory"
          className="dropdown"
          onChange={(e) => setInventoryQTY(e.target.value)}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>
      <div className="gun_list">
        <ul>
          {inventories.map((inventory, index) => (
            <div
              onClick={() => addItem(inventory)}
              key={index}
              className={`product ${
                selectedInventories.some((item) => item.name === inventory.name)
                  ? "selected"
                  : ""
              }`}
            >
              <span>{inventory.name}</span>
            </div>
          ))}
        </ul>
      </div>
      <div className="gun_total">
        <h4>Inventory subtotal</h4>

        {/* issue 3 is updated */}
        <h4>
          USD{" "}
          {selectedInventories.reduce(function (prev, current) {
            return prev + current.price;
          }, 0)}
          .00
        </h4>
      </div>
    </div>
  );
}

export default Inventories;
