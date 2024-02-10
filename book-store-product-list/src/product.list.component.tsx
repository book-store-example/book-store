import ProductCardComponent from "./product.card.component";

export default function ProductListComponent(props) {
  return (
    <div className="container">
      <div className="row">
        {props.books.map((i) => (
          <ProductCardComponent key={i.id} {...i}></ProductCardComponent>
        ))}
      </div>
    </div>
  );
}
