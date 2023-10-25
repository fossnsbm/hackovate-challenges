import React from "react";

import styles from "./ItemMenu.module.scss";

interface Item {
  i: number;
  name: string;
  price: number;
  quantity: number;
}

function ItemMenu({ items }: { items: Item[] }) {
  const [order, setOrder] = React.useState<Item[]>([]);

  const [ITEMS, setItems] = React.useState<Item[]>(items);

  const [hydrated, setHydrated] = React.useState<boolean>(false);

  React.useEffect(() => {
    setHydrated(true);
  }, []);
  if (!hydrated) {
    return null;
  }

  function addToOrder(item: Item, mode: number) {
    return;
  }

  function getSubTotal(items: Item[]) {
    return 0;
  }

  return (
    <div className={styles.ItemMenu}>
      <table>
        <tr>
          <td colSpan={7}>
            <b>Select Quantity</b>
          </td>
          <td>
            <b>
              <input type='number' placeholder='0' />
            </b>
          </td>
        </tr>

        <tr>
          <td colSpan={8}>
            <hr />
          </td>
        </tr>

        {ITEMS.map((item, i) => (
          <tr key={i}>
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
          <td colSpan={8}>
            <hr />
          </td>
        </tr>

        <tr>
          <td colSpan={7}>
            <b>Subtotal:</b>
          </td>
          <td className={styles.number}>
            <b>${getSubTotal(items)}</b>
          </td>
        </tr>
      </table>
    </div>
  );
}

ItemMenu.style = styles;

export default ItemMenu;
export { ItemMenu };
