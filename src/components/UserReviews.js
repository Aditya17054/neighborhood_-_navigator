import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "../styles/UserReviews.css";

const UserReviews = ({ onSubmit }) => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [comment, setComment] = useState("");
  const [reviews, setReviews] = useState([]);

  const handleRatingChange = (value) => {
    setRating(value);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ rating, comment });
    setRating(0);
    setHoverRating(0);
    setComment("");
    // Assuming onSubmit updates the reviews list, you can update it here
    setReviews([...reviews, { rating, comment }]);
  };

  return (
    <div className="user-reviews-container">
      <div className="user-reviews-left">
        <h3>Leave a Review</h3>
        <form onSubmit={handleSubmit}>
          <div className="rating">
            {[...Array(5)].map((_, index) => {
              const ratingValue = index + 1;
              return (
                <label key={index}>
                  <input
                    type="radio"
                    name="rating"
                    value={ratingValue}
                    style={{ display: "none" }} // Hide the radio button
                    onClick={() => handleRatingChange(ratingValue)}
                  />
                  <FaStar
                    className="star"
                    color={
                      ratingValue <= (hoverRating || rating)
                        ? "#ffc107"
                        : "#e4e5e9"
                    }
                    size={30}
                    onMouseEnter={() => setHoverRating(ratingValue)}
                    onMouseLeave={() => setHoverRating(0)}
                  />
                </label>
              );
            })}
          </div>
          <div>
            <label>
              <b>Comment:</b>
            </label>
            <textarea
              value={comment}
              onChange={handleCommentChange}
              style={{
                width: "95%",
                height: "100px",
                resize: "none",
                overflow: "auto",
              }} // Fixed size for the comment box
            ></textarea>
          </div>
          <button type="submit">Submit Review</button>
        </form>
      </div>
      <div className="reviews-container">
        <div className="reviews-section">
          <h3>Recent Reviews</h3>
          {reviews.length > 0 ? (
            <ul>
              {reviews.map((review, index) => (
                <li key={index} className="review-item">
                  <div className="review-content">
                    <span className="rating">{review.rating}</span>
                    <p className="comment">{review.comment}</p>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p>No reviews yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserReviews;
