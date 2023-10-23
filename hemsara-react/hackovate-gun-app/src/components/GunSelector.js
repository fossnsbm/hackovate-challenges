import { useState } from "react";
import "../index.scss";
import Guns from "./Guns";
import Inventories from "./Inventories";

const GunSelector = () => {
  const [gunQTY, setGunQTY] = useState(1);
  const [inventoryQTY, setInventoryQTY] = useState(1);

  const [selectedGuns, setSelectedGuns] = useState([]);
  const [selectedInventories, setSelectedInventories] = useState([]);

  const [guns, setGuns] = useState([
    { name: "Assault-Rifle", price: 1000 },
    { name: "Sniper", price: 2000 },
    { name: "Shotgun", price: 1500 },
    { name: "Revolver", price: 500 },
    { name: "Machine-Gun", price: 2500 },
    { name: "Pistol", price: 50 },
    { name: "RPG", price: 3000 },
    { name: "Laser-Gun", price: 3500 },
  ]);

  const [inventories, seInventories] = useState([
    { name: "Medi-Kit", price: 500 },
    { name: "Molotov", price: 1000 },
    { name: "Grenade", price: 1500 },
    { name: "Knife", price: 2000 },
    { name: "Sword", price: 2500 },
    { name: "Armour", price: 3000 },
    { name: "C4", price: 3500 },
    { name: "Landmine", price: 4000 },
  ]);

  function placeOrder() {
    if (selectedGuns.length == 0 || selectedInventories.length == 0) {
      alert("Please select items");
      return;
    }
    alert("Thank you for using gunsmith");
    setSelectedInventories([]);
    setSelectedGuns([]);
    setGunQTY(1);
    setInventoryQTY(1);
  }

  function getTotal() {
    const gunTotal = selectedGuns.reduce(
      (prev, current) => prev + current.price,
      0
    );
    const inventoryTotal = selectedInventories.reduce(
      (prev, current) => prev + current.price,
      0
    );
    return gunTotal + inventoryTotal;
  }

  return (
    <div className="col">
      <h1 className="heading-large">GUNSMITH.ONION</h1>
      <div className="gun_selector__bg">
        <Guns
          guns={guns}
          qty={gunQTY}
          selectedGuns={selectedGuns}
          setGunQTY={setGunQTY}
          setSelectedGuns={setSelectedGuns}
        />
        <Inventories
          inventories={inventories}
          qty={inventoryQTY}
          selectedInventories={selectedInventories}
          setInventoryQTY={setInventoryQTY}
          setSelectedInventory={setSelectedInventories}
        />
      </div>
      <button onClick={() => placeOrder()}>
        Order now | ${getTotal()} USD
      </button>
    </div>
  );
};

export default GunSelector;
