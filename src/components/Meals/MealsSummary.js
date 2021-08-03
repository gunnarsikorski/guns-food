import React from 'react';
import classes from './MealsSummary.module.css';

const MealsSummary = () => {
	return (
		<section className={classes.summary}>
			<h2>Your Food, Your Way</h2>
			<p>
				Check out what mouth watering options we have cooking for you right now!
				Available for lunch and dinner
			</p>
			<p>
				Our food is made with fresh, locally sourced ingredients, and extra
				love!
			</p>
		</section>
	);
};

export default MealsSummary;
