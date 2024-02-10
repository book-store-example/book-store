import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ConfigurationService, Mountable } from "@fusionize/fusionize-react";
import { from, delay, take, map } from "rxjs";
import ReviewBoxComponent from "./review.box.component";
import ReviewRatingComponent from "./review.rating";

export default function ReviewsListComponent(props) {
  let [reviews, setReviews] = useState([]);

  const params = useParams();
  useEffect(() => {
    fetch(
      ConfigurationService.instance().assetUrl(
        `public/reviews/${params.id}.json`
      )
    ).then((r) => {
      if (r.ok) {
        from(r.json())
          .pipe(
            take(1),
            map((j) => j.reviews)
          )
          .subscribe(setReviews);
      } else {
        setReviews([]);
      }
    });
  }, []);
  return (
    <>
      <Mountable location="review-score">
        {reviews.length > 0 ? (
          <h3>
            {` ${getAverageScore()} `}
            <span className="text-warning">
              <ReviewRatingComponent
                rate={getAverageScore()}
              ></ReviewRatingComponent>
            </span>
          </h3>
        ) : (
          <h3>No review yet!</h3>
        )}
      </Mountable>
      {reviews.map((i) => (
        <ReviewBoxComponent key={i.id} {...i}></ReviewBoxComponent>
      ))}
    </>
  );

  function getAverageScore() {
    return (
      reviews.map((r) => r.rating).reduce((acc, val) => acc + val, 0) /
      reviews.length
    );
  }
}
