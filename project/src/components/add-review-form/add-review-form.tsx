import { ChangeEvent, FC, FormEvent, useState } from 'react';
import { postMovieReview } from '../../helpers/api_functions';

type ReviewFormValue = {
  starsCount: number;
  reviewText: string;
};

type Props = {
  movieId: number,
}

const AddReviewForm: FC<Props> = (props) => {
  const { movieId } = props;

  const [formValue, setFormValue] = useState<ReviewFormValue>({
    starsCount: 0,
    reviewText: ''
  });

  const onSubmit = (review: ReviewFormValue) => {
    postMovieReview(movieId, {comment: review.reviewText, rating: review.starsCount}).then();
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (formValue.reviewText && formValue.starsCount) {
      onSubmit(formValue);
    }
  };

  const handleReviewTextChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setFormValue((prevValue) => ({
      ...prevValue,
      reviewText: event.target.value
    }));
  };

  const handleStarsCountChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormValue((prevState) => ({
      ...prevState,
      starsCount: Number(event.target.value)
    }));
  };

  return (
    <form action="#" className="add-review__form" onSubmit={handleSubmit}>
      <div className="rating">
        <div className="rating__stars">
          {
            Array.from(Array(10).keys()).map((cur) => (
                <span key={cur}>
                <input className="rating__input" id={`star-${cur + 1}`} type="radio" name="rating" value={cur + 1}
                       checked={formValue.starsCount === cur + 1} onChange={handleStarsCountChange}
                />
                <label className="rating__label" htmlFor={`star-${cur + 1}`}>Rating {cur + 1}</label>
              </span>
              )
            )
          }
        </div>
      </div>

      <div className="add-review__text">
        <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text"
                  value={formValue.reviewText} onChange={handleReviewTextChange}
        />
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit">Post</button>
        </div>

      </div>
    </form>
  );
};

export default AddReviewForm;
