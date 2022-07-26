// LEVEL 3 – Optimizing meals for protein
//  Given the amount of calories for a meal, implement an algorithm to select Food Items with following
// constraints in the order of priority from highest to lowest –
// o Quantity of items is a whole number (eg – 1 banana and not 0.234 banana). Acceptable quantities
// are in the multiples of 0.25 (eg – 0.25, 0.5, 1, 1.75, etc) but the logic should prioritize whole
// numbers.
// o Calories are in the range of ± 100 from the given amount.
// o The amount of protein (1g protein has 4 calories) is 20-30% of the total calories.
// o The number of different items are in the range of 2-5

const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const passwordComplexity = require('joi-password-complexity');
const {User} = require('./model/user');
const {Food} = require('./model/food');
const {Meal} = require('./model/meal');
const {MealPlan} = require('./model/mealPlan');
const {validateFood} = require('./model/food');
const {validateMeal} = require('./model/meal');
const {validateUser} = require('./model/user');
const validateMealPlan = async (req, res) => {
    const {error} = validateMealPlan(req.body);
    if(error) return res.status(400).send(error.details[0].message);
    let mealPlan = new MealPlan({
        date: req.body.date,
        meal: req.body.meal
    });
    try{
        await mealPlan.save();
        res.send(mealPlan);
    }catch(err){
        res.status(400).send(err);
    }
}
const validateFood = async (req, res) => {
    const {error} = validateFood(req.body);
    if(error) return res.status(400).send(error.details[0].message);
    let food = new Food({
        name: req.body.name,
        calories: req.body.calories,
        protein: req.body.protein,
        carb: req.body.carb,
        fat: req.body.fat
    });
    try{
        await food.save();
        res.send(food);
    }catch(err){
        res.status(400).send(err);
    }
}
const validateUser = async (req, res) => {
    const {error} = validateUser(req.body);
    if(error) return res.status(400).send(error.details[0].message);
    let user = new User({
        email: req.body.email,
        password: req.body.password
    });
    try{
        await user.save();
        res.send(user);
    }catch(err){
        res.status(400).send(err);
    }
}
const validateMeal = async (req, res) => {
    const {error} = validateMeal(req.body);
    if(error) return res.status(400).send(error.details[0].message);
    let meal = new Meal({
        name: req.body.name,
        food: req.body.food,
        quantity: req.body.quantity,
        calories: req.body.calories,
        protein: req.body.protein,
        carb: req.body.carb,
        fat: req.body.fat
    });
    try{
        await meal.save();
        res.send(meal);
    }catch(err){
        res.status(400).send(err);
    }
}
module.exports = {validateMealPlan, validateFood, validateMeal, validateUser};

