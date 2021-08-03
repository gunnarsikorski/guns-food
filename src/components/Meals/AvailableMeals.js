import React from 'react';
import classes from './AvailableMeals.Module.css'

const DUMMY_MEALS = [
	{
		id: 1,
		name: 'Sushi',
		description: 'Finest fish and veggies',
		price: 22.99,
	},
	{
		id: 2,
		name: 'Schnitzel',
		description: 'A german specialty!',
		price: 16.5,
	},
	{
		id: 3,
		name: 'Barbecue Burger',
		description: 'American, raw, meaty',
		price: 12.99,
	},
	{
		id: 4,
		name: 'Green Bowl',
		description: 'Healthy...and green...',
		price: 18.99,
	},
];

const AvailableMeals = () => {
	const mealList = DUMMY_MEALS.map((meal) => <li>{meal.name}</li>);

	return (
		<>
			<section className={classes.meals}>
				<ul>{mealList}</ul>
			</section>
		</>
	);
};

export default AvailableMeals;
