import {
  ConfigurationService,
  Mountable,
  ServiceDirectory,
} from "@fusionize/fusionize-react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProductLoadingComponent from "./product.loding.component";
import ProductErrorComponent from "./product.error.components";
import ProductDetailsComponent from "./product.details.component";
import { from, delay, take } from "rxjs";
let cartService = undefined;
export default function ProductComponent(props) {
  const params = useParams();
  const navigate = useNavigate();

  let [book, setBook] = useState(undefined);

  useEffect(() => {
    fetch(
      ConfigurationService.instance().assetUrl(`public/books/${params.id}.json`)
    ).then((r) => {
      if (r.ok) {
        from(r.json()).pipe(delay(500), take(1)).subscribe(setBook);
      } else {
        setBook({});
      }
    });
    const serviceDirectorySubs = ServiceDirectory.instance()
      .request("cartService")
      .subscribe((cs) => {
        cartService = cs;
      });
    return () => serviceDirectorySubs.unsubscribe();
  }, []);

  return (
    <>
      <Mountable location="navigation-bar-start">
        <ul className="navbar-nav ">
          <li className="nav-item">
            <a
              className="nav-link ms-3"
              onClick={() => navigate(-1)}
              href="/books"
            >
              ← Back to Book list
            </a>
          </li>
        </ul>
      </Mountable>
      <div className="container">
        {book && book.id ? (
          <ProductDetailsComponent
            book={book}
            cartService={cartService}
          ></ProductDetailsComponent>
        ) : book ? (
          <ProductErrorComponent></ProductErrorComponent>
        ) : (
          <ProductLoadingComponent></ProductLoadingComponent>
        )}
      </div>
    </>
  );
}
