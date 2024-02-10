import "./root.component.scss";
import { cartService } from "./cart-service";
import CartItem from "./cart-item";
import { useEffect, useState } from "react";

export default function Cart(props) {
  const [cart, setCart] = useState(cartService.getAll());
  useEffect(() => {
    const subs = cartService.obs$.subscribe((i) => setCart(i));
    return () => subs.unsubscribe();
  }, []);

  return (
    <ul className="list-group list-group-flush">
      {cart.map((i) => (
        <CartItem
          key={i.id}
          {...i}
          remove={(id) => cartService.remove(id)}
        ></CartItem>
      ))}
    </ul>
  );
}
