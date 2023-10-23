import "../index.scss";

function Guns({ guns, qty, selectedGuns, setGunQTY, setSelectedGuns }) {
  function addItem(gun) {
    // this is the part where issue 4 belongs | this will handle the qty exceeded state
    let contains = selectedGuns.some((item) => item.name === gun.name);
    if (selectedGuns.length >= qty && !contains) {
      alert("Quantity limit exceeded");
      return;
    }
    if (!contains) {
      setSelectedGuns([...selectedGuns, gun]);
    } else {
      setSelectedGuns(selectedGuns.filter((item) => item.name !== gun.name));
    }
  }
  return (
    <div className="guns">
      <div className="qty_select">
        <h4>Select gun quantity</h4>
        <select
          name="guns"
          id="guns"
          className="dropdown"
          onChange={(e) => setGunQTY(e.target.value)}
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
          {guns.map((gun, index) => (
            <div
              onClick={() => addItem(gun)}
              key={index}
              className={`product ${
                selectedGuns.some((item) => item.name === gun.name)
                  ? "selected"
                  : ""
              }`}
            >
              <span>{gun.name}</span>
            </div>
          ))}
        </ul>
      </div>
      <div className="gun_total">
        <h4>Gun subtotal</h4>
        {/* issue 3 is updated */}
        <h4>
          USD
          {selectedGuns.reduce(function (prev, current) {
            return prev + current.price;
          }, 0)}
          .00
        </h4>
      </div>
    </div>
  );
}

export default Guns;
