import { ConfigurationService, Mountable } from "@fusionize/fusionize-react";
import { useEffect, useState } from "react";
import ProductListComponent from "./product.list.component";
import ProductSearchComponent from "./product.search.component";

export default function Root(props) {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    ConfigurationService.config(props);
    fetch(ConfigurationService.instance().assetUrl("public/books.json")).then(
      (r) => r.json().then((json) => setBooks(json.books))
    );
  }, []);
  return (
    <>
      <Mountable location="navigation-bar-start" weight={0}>
        <ProductSearchComponent
          searchPhrase={search}
          doSearch={(s) => setSearch(s)}
        ></ProductSearchComponent>
      </Mountable>
      <Mountable location="main-content">
        <ProductListComponent books={getFilteredBooks()}></ProductListComponent>
      </Mountable>
    </>
  );

  function getFilteredBooks() {
    const phrase = search.toLowerCase();
    return books.filter(
      (b) =>
        search == "" ||
        b.title.toLowerCase().search(phrase) >= 0 ||
        b.genre.toLowerCase().search(phrase) >= 0 ||
        b.keywords.some((k) => k.toLowerCase().search(phrase) >= 0)
    );
  }
}
