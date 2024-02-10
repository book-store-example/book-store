export default function ProductLoadingComponent(props) {
  return (
    <div className="col-sm-12 m-5">
      <div className="d-flex flex-row p-5 justify-content-center align-items-end">
        <h1 className="m-2">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>{" "}
          Loading...
        </h1>
      </div>
    </div>
  );
}
