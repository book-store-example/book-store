import Avatar from "react-avatar";
import ReviewRatingComponent from "./review.rating";

export default function ReviewBoxComponent(props) {
  return (
    <>
      <div className="card m-2">
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <h3>
              <Avatar
                name={props.reviewer_name}
                size="28"
                textSizeRatio={2}
                round={true}
              />{" "}
              {props.reviewer_name}
            </h3>
          </li>
          <li className="list-group-item">{props.review_text}</li>
          <li className="list-group-item">
            <span className="text-warning">
              <ReviewRatingComponent
                rate={props.rating}
              ></ReviewRatingComponent>
            </span>
          </li>
        </ul>
      </div>
    </>
  );
}
