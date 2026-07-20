import { useState } from "react";
import { type Review } from "../types/vehicle";

interface CommentFormProps {
  onAddReview: (review: Review) => void;
}

function CommentForm({ onAddReview }: CommentFormProps) {
  const [reviewerName, setReviewerName] = useState("");
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (reviewerName === "" || comment === "") {
      alert("Fill in all fields.");
      return;
    }

    const newReview = {
      reviewerName: reviewerName,
      reviewerEmail: "",
      rating: rating,
      comment: comment,
      date: new Date().toISOString(),
    };

    onAddReview(newReview);

    setReviewerName("");
    setRating(5);
    setComment("");
  }

  return (
    <form className="comment-form" onSubmit={handleSubmit}>
      <h3>Leave a review</h3>

      <div className="comment-form__row">
        <input
          type="text"
          placeholder="Ваше ім'я"
          value={reviewerName}
          onChange={(e) => setReviewerName(e.target.value)}
        />

        <select
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
        >
          <option value={5}>5 ⭐</option>
          <option value={4}>4 ⭐</option>
          <option value={3}>3 ⭐</option>
          <option value={2}>2 ⭐</option>
          <option value={1}>1 ⭐</option>
        </select>
      </div>

      <textarea
        placeholder="Your review"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />

      <button type="submit">Send review</button>
    </form>
  );
}

export default CommentForm;
