import { MountPlace } from "@fusionize/fusionize-react";
import "./product.details.component.css";
import { useEffect, useState } from "react";

export default function ProductDetailsComponent(props) {
  let [isInCart, setIsInCart] = useState(false);
  useEffect(() => {
    setIsInCart(() => props.cartService.contains(props.book.id));
    const cartServiceSubscription = props.cartService.obs$.subscribe((i) =>
      setIsInCart(() => props.cartService.contains(props.book.id))
    );

    return () => {
      cartServiceSubscription.unsubscribe();
    };
  }, []);

  return (
    <>
      <div className="card m-3 text-bg-light">
        <div className="row g-0">
          <div className="col-md-3 col-xl-2">
            <img
              src={props.book.cover}
              className="img-fluid rounded-start h-100"
              alt={props.book.title}
            />
          </div>
          <div className="col-md-9  col-xl-10">
            <div className="card-body">
              <span className="badge text-bg-primary opacity-50">
                {props.book.genre}
              </span>
              <h1 className="card-title">{props.book.title}</h1>
              <p className="card-text text-muted">By {props.book.author}</p>
              <p className="card-text">{props.book.description}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="card m-3 text-bg-light">
        <div className="card-header">
          Ready to read this novel in <b>{props.book.genre}</b> genre
        </div>
        <div className="card-body">
          <h5 className="card-title">{props.book.title}</h5>
          {props.book.keywords.map((kv) => (
            <span
              key={kv}
              className="badge text-bg-secondary opacity-50"
              style={{ margin: "1px" }}
            >
              {kv}
            </span>
          ))}
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <div className="d-flex flex-row">
              <MountPlace location="review-score"></MountPlace>
              <span className="spacer"></span>
              <div className=" text-end">
                <h2>${Intl.NumberFormat().format(props.book.price)}</h2>
                <span className="text-muted">Immediate online delivery</span>
              </div>
            </div>
          </li>
        </ul>
        <div className="card-footer text-end">
          {isInCart ? (
            <button
              type="button"
              className="btn  btn-outline-danger m-1"
              onClick={() => props.cartService.remove(props.book.id)}
            >
              - Remove <b>"{props.book.title}"</b> from my cart
            </button>
          ) : (
            <button
              type="button"
              className="btn btn-primary m-1"
              onClick={() => props.cartService.add(props.book)}
            >
              + Add <b>"{props.book.title}"</b> to my cart
            </button>
          )}
        </div>
      </div>
      <div className="card m-3 text-bg-light">
        <div className="card-header">
          <span className="text-muted">
            <b>{props.book.title}</b> reviewed by readers
          </span>
        </div>
        <div className="card-body">
          <MountPlace location="reviews-container"></MountPlace>
        </div>
      </div>
    </>
  );
}
