import {
  ConfigurationService,
  Mountable,
  ServiceDirectory,
} from "@fusionize/fusionize-react";
import "./root.component.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faXmark } from "@fortawesome/free-solid-svg-icons";
import { cartService } from "./cart-service";
import Cart from "./cart";
import { useEffect, useState } from "react";

let layoutService = undefined;
export default function Root(props) {
  let [inCart, setInCart] = useState(cartService.getAll().length);

  useEffect(() => {
    ConfigurationService.config(props);
    ServiceDirectory.instance().register(cartService, "cartService");
    const cartSubs = cartService.obs$.subscribe((i) =>
      setInCart(() => i.length)
    );
    const lsSubs = ServiceDirectory.instance()
      .request("layoutService")
      .subscribe((s) => (layoutService = s));
    const config = ConfigurationService.factory((c) => c);
    return () => {
      lsSubs.unsubscribe();
      cartSubs.unsubscribe();
    };
  }, []);

  return (
    <>
      <Mountable location="navigation-bar-end">
        <button
          type="button"
          className="btn btn-outline-light position-relative"
          onClick={() => layoutService.openSidebar()}
        >
          <FontAwesomeIcon icon={faCartShopping} /> Shopping Cart
          {inCart > 0 ? (
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">
              {inCart}
              <span className="visually-hidden">cart items</span>
            </span>
          ) : (
            <></>
          )}
        </button>
      </Mountable>
      <Mountable location="sidenav-header">
        <div className="d-flex">
          <h4>Shopping Cart</h4>
          <span className="spacer"></span>
          <button
            type="button"
            className="btn btn-outline-dark"
            onClick={() => layoutService.closeSidebar()}
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>
      </Mountable>
      <Mountable location="sidenav-content">
        <Cart></Cart>
      </Mountable>
    </>
  );
}
