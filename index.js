const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const {dbConnect} = require('../database/db.connect');
const {router} = require('./foodRoute');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/food', router);
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
  dbConnect();
}
);

// LEVEL 3 – Optimizing meals for protein
//  Given the amount of calories for a meal, implement an algorithm to select Food Items with following
// constraints in the order of priority from highest to lowest –
// o Quantity of items is a whole number (eg – 1 banana and not 0.234 banana). Acceptable quantities
// are in the multiples of 0.25 (eg – 0.25, 0.5, 1, 1.75, etc) but the logic should prioritize whole
// numbers.
// o Calories are in the range of ± 100 from the given amount.
// o The amount of protein (1g protein has 4 calories) is 20-30% of the total calories.
// o The number of different items are in the range of 2-5.