import "../index.scss";

function Inventories({ inventories }) {
  return (
    <div className="inventories">
      <div className="qty_select">
        <h4>Select inventory quantity</h4>
        <select name="inventory" id="inventory" className="dropdown">
          <option value="">1</option>
          <option value="">2</option>
          <option value="">3</option>
          <option value="">4</option>
          <option value="">5</option>
          <option value="">6</option>
          <option value="">7</option>
          <option value="">8</option>
          <option value="">9</option>
          <option value="">10</option>
        </select>
      </div>
      <div className="gun_list">
        <ul>
          {inventories.map((inventory, index) => (
            <div key={index} className="product">
              <span>{inventory.name}</span>
            </div>
          ))}
        </ul>
      </div>
      <div className="gun_total">
        <h4>Inventory subtotal</h4>
        <h4>USD 458O.00</h4>
      </div>
    </div>
  );
}

export default Inventories;
