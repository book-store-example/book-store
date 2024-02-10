export default function ProductErrorComponent(props) {
  return (
    <div className="col-sm-12 m-5">
      <div className="d-flex flex-row p-5 justify-content-center align-items-end">
        <div>
          <span style={{ fontSize: "110px" }}>🤖</span>
          <h1 className="text-danger">No book found!!</h1>
          <p>Please make sure the book id is right.</p>
        </div>

      </div>
    </div>
  );
}
