import { useState } from "react";
import "../index.scss";
import Guns from "./Guns";
import Inventories from "./Inventories";
const GunSelector = () => {
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

  return (
    <div className="col">
      <h1 className="heading-large">GUNSMITH.ONION</h1>
      <div className="gun_selector__bg">
        <Guns guns={guns} />
        <Inventories inventories={inventories} />
      </div>
    </div>
  );
};

export default GunSelector;
