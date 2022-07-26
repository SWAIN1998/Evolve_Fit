// LEVEL 1 – Schema Design  Make a new project and setup MongoDB server. Design Mongoose Schema according to the following – o Food Item (all data per 100g)– name, calories, protein, carb, fat, acceptedUnits (array of enum of
//     ml, liter, kg, g, item, etc), itemWeight (in g) (eg. – average weight of 1 banana is 118g) o Meal – category (enum based on time of day - Breakfast, Lunch, Evening Snack, Dinner), name,
//     foodItems (array) o User – name, calorieRequirement, mealPlan (array of object having date and Meals reference)

const mongoose = require('mongoose');
const foodSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    calories: {
        type: Number,
        required: true
    },
    protein: {
        type: Number,
        required: true
    },
    carb: {
        type: Number,
        required: true
    },
    fat: {
        type: Number,
        required: true
    }
}
);
const mealSchema = new mongoose.Schema({
    category: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }
}
);
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    calorieRequirement: {
        type: Number,
        required: true
    }
}
);
const Food = mongoose.model('Food', foodSchema);
const Meal = mongoose.model('Meal', mealSchema);
const User = mongoose.model('User', userSchema);
module.exports = {
    Food,
    Meal,
    User
}
