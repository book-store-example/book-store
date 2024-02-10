export default function ReviewRatingComponent(props) {
  let rate = Math.max(props.rate, 1);
  rate = Math.min(rate, 5);

  return <>{[...Array(5)].map((_, index) => (index < rate ? "★" : "✩"))}</>;
}
