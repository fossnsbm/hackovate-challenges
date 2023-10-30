import React, { ChangeEvent } from "react";

import styles from "./ItemMenu.module.scss";

interface Item {
  i: number;
  name: string;
  price: number;
  quantity: number;
  selected: boolean;
}

function ItemMenu({ items }: { items: Item[] }) {
  const [menuItems, setItems] = React.useState<Item[]>(items);
  const [menuSubTotal, setMenuSubTotal] = React.useState<number>(0);
  const [menuItemCap, setMenuItemCap] = React.useState<number>(0);

  const [hydrated, setHydrated] = React.useState<boolean>(false);

  React.useEffect(() => {
    setHydrated(true);
  }, []);
  if (!hydrated) {
    return null;
  }

  function selectItem(e: ChangeEvent, item: Item) {
    var totalSelected = 0;
    const selected = !item.selected;

    if (!selected) {
      item.quantity = 0;
    }

    menuItems.forEach((i) => {
      if (i.selected) {
        totalSelected++;
      }
    });

    if (totalSelected >= menuItemCap && !item.selected) {
      alert("You have reached the limit of items you can select!");
      e.preventDefault();
      return;
    }

    const newMenuItems = menuItems.map((i) => {
      if (i.i === item.i) {
        i = { ...i, selected: !i.selected };
        return i;
      }

      return i;
    });

    setItems(newMenuItems);
  }

  function refreshSubTotal(items: Item[]) {
    return;
  }

  function addToOrder(item: Item, mode: number) {
    const newMenuItems = menuItems.map((i) => {
      if (i.i === item.i) {
        if (!i.selected) {
          alert("Please select the item by toggling the checkbox!");
          return i;
        }

        i = { ...i, quantity: i.quantity + mode };
        if (i.quantity < 0) {
          return { ...i, quantity: 0 };
        }
        return i;
      }

      return i;
    });

    setItems(newMenuItems);
    refreshSubTotal(newMenuItems);
  }

  return (
    <div className={styles.ItemMenu}>
      <table>
        <tr>
          <td colSpan={8}>
            <b>Select Quantity</b>
          </td>
          <td>
            <b>
              <input
                type='number'
                placeholder='0'
                onInputCapture={(e) => {
                  e.target.value > 0 ? null : (e.target.value = 0);
                  setMenuItemCap(e.target.value);
                }}
              />
            </b>
          </td>
        </tr>

        <tr>
          <td colSpan={9}>
            <hr />
          </td>
        </tr>

        {menuItems.map((item, i) => (
          <tr key={i}>
            <td>
              <input
                type='checkbox'
                {...{ checked: item.selected }}
                onChange={(e) => selectItem(e, item)}
              />
            </td>
            <td className={styles.Item}>{item.name}</td>
            <td>
              <button onClick={() => addToOrder(item, 1)}>+</button>
            </td>
            <td>
              <button onClick={() => addToOrder(item, -1)}>-</button>
            </td>

            <td className={styles.number}>${item.price}</td>
            <td>x</td>
            <td className={styles.number}>{item.quantity}</td>
            <td>=</td>
            <td className={styles.number}>${item.price * item.quantity}</td>
          </tr>
        ))}

        <tr>
          <td colSpan={9}>
            <hr />
          </td>
        </tr>

        <tr>
          <td colSpan={8}>
            <b>Subtotal:</b>
          </td>
          <td className={styles.number}>
            <b>${menuSubTotal}</b>
          </td>
        </tr>
      </table>
    </div>
  );
}

ItemMenu.style = styles;

export default ItemMenu;
export { ItemMenu };
