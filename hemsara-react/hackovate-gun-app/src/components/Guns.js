import "../index.scss";

function Guns({ guns }) {
  console.log(guns);
  return (
    <div className="guns">
      <div className="qty_select">
        <h4>Select gun quantity</h4>
        <select name="guns" id="guns" className="dropdown">
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
          {guns.map((gun, index) => (
            <div key={index} className="product">
              <span>{gun.name}</span>
            </div>
          ))}
        </ul>
      </div>
      <div className="gun_total">
        <h4>Gun subtotal</h4>
        <h4>USD 456O.00</h4>
      </div>
    </div>
  );
}

export default Guns;
