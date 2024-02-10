import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CartItem(props) {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-start">
      <img
        width={75}
        src={props.cover}
        className="img-thumbnail"
        alt={props.title}
      />
      <div className="ms-2 me-auto">
        <div className="fw-bold">{props.title}</div>
        <p
          className="d-inline-block text-truncate"
          style={{ maxWidth: "199px" }}
        >
          {props.description}
        </p>
      </div>
      <div className="d-flex flex-column">
        <h3 className="badge text-bg-light">
          ${Intl.NumberFormat().format(props.price)}
        </h3>
        <button
          type="button"
          onClick={() => props.remove(props.id)}
          className="btn btn-outline-warning"
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </li>
  );
}
