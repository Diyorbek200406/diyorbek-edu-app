import { RatingProps } from './rating.props';
import styles from './rating.module.css';
import cn from 'classnames';
import { useEffect, useState } from 'react';
import StarIcon from './star.svg';

const Rating = ({ rating, isEditabled = false, setRating, ...props }: RatingProps): JSX.Element => {
	const [retingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

	useEffect(() => {
		renderRating(rating);
	}, [rating]);
	const renderRating = (currentRating: number) => {
		const updatedArray = retingArray.map((r: JSX.Element, idx: number) => (
			<span
				className={cn(styles.star, {
					[styles.filled]: idx < currentRating,
					[styles.editable]: isEditabled,
				})}
				onMouseEnter={() => changeRating(idx + 1)}
				onMouseLeave={() => changeRating(rating)}
				onClick={() => clickRating(idx + 1)}
			>
				<StarIcon />
			</span>
		));
		setRatingArray(updatedArray);
	};

	const changeRating = (index: number) => {
		if (!isEditabled) {
			return;
		}
		renderRating(index);
	};

	const clickRating = (index: number) => {
		if (!isEditabled || !setRating) {
			return;
		}
		setRating(index);
	};

	return (
		<div className={styles.rating} {...props}>
			{retingArray.map((rating, idx) => (
				<span key={idx}>{rating}</span>
			))}
		</div>
	);
};

export default Rating;
