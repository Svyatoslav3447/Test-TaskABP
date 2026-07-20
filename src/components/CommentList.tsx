import { FiStar } from "react-icons/fi";
import { type Review } from "../types/vehicle";

interface CommentListProps {
  reviews: Review[];
}

function CommentList({ reviews }: CommentListProps) {
  if (reviews.length === 0) {
    return <p>There are no reviews yet. Be the first!</p>;
  }

  return (
    <div>
      {reviews.map((review, index) => (
        <article className="review" key={index}>
          <div className="review__top">
            <strong>{review.reviewerName}</strong>
            <span>
              <FiStar /> {review.rating}
            </span>
          </div>
          <p>{review.comment}</p>
        </article>
      ))}
    </div>
  );
}

export default CommentList;
