import { FiStar } from "react-icons/fi";
import { type Review } from "../types/vehicle";

interface CommentListProps {
  reviews: Review[];
}

function CommentList({ reviews }: CommentListProps) {
  if (reviews.length === 0) {
    return (
      <p className="reviews__empty">There are no reviews yet. Be the first!</p>
    );
  }

  return (
    <div className="reviews__list">
      {reviews.map((review, index) => (
        <article className="review" key={index}>
          <div className="review__top">
            <div>
              <strong className="review__author">{review.reviewerName}</strong>

              <div className="review__date">
                {new Date(review.date).toLocaleDateString()}
              </div>
            </div>

            <span className="review__rating">
              <FiStar />
              {review.rating}
            </span>
          </div>

          <p className="review__text">{review.comment}</p>
        </article>
      ))}
    </div>
  );
}

export default CommentList;
