// LEVEL 2 – Creating objects in database using APIs
//  Create POST APIs to add the following in the database –
// o Add any 20 Food Items using POST API from here or any other items as per your liking -
// https://jtmadhavan.files.wordpress.com/2009/09/the-calorie-chart-of-indian-food.pdf
// o Create any 5 Meals using the meal items by referencing Food Items into mealItems array.
// o Create a user using dummy data and make Meal Plan for 2 dates using the 5 meals created by
// using a POST API to append the mealPlan array in the user object.
//  Create PATCH API to update Meals in the DB and Meal Plans for a User.
const {Food, Meal,user } = require('./model/user');
const {validate} = require('./model/user');
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
const {validateMealPlan} = require('./model/mealPlan');
const {validateFood} = require('./model/food');
const {validateMeal} = require('./model/meal');
const {validateUser} = require('./model/user');
const {validateMealPlan} = require('./model/mealPlan');
const {validateMealPlan} = require('./model/mealPlan');
const createFood = async (req, res) => {
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
const createMeal = async (req, res) => {
    const {error} = validateMeal(req.body);
    if(error) return res.status(400).send(error.details[0].message);
    let meal = new Meal({
        category: req.body.category,
        name: req.body.name
    });
    try{
        await meal.save();
        res.send(meal);
    }catch(err){
        res.status(400).send(err);
    }
}
const createMealPlan = async (req, res) => {
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
const createUser = async (req, res) => {
    const {error} = validateUser(req.body);
    if(error) return res.status(400).send(error.details[0].message);
    let user = new User({
        email: req.body.email,
        password: req.body.password,
        mealPlan: req.body.mealPlan
    });
    try{
        await user.save();
        res.send(user);
    }catch(err){
        res.status(400).send(err);
    }
}
const getFood = async (req, res) => {
    try{
        let food = await Food.find();
        res.send(food);
    }catch(err){
        res.status(400).send(err);
    }
}
const getMeal = async (req, res) => {
    try{
        let meal = await Meal.find();
        res.send(meal);
    }catch(err){
        res.status(400).send(err);
    }
}
const getMealPlan = async (req, res) => {
    try{
        let mealPlan = await MealPlan.find();
        res.send(mealPlan);
    }catch(err){
        res.status(400).send(err);
    }
}
const getUser = async (req, res) => {
    try{
        let user = await User.find();
        res.send(user);
    }catch(err){
        res.status(400).send(err);
    }
}
const getFoodById = async (req, res) => {
    try{
        let food = await Food.findById(req.params.id);
        res.send(food);
    }catch(err){
        res.status(400).send(err);
    }
}
const getMealById = async (req, res) => {
    try{
        let meal = await Meal.findById(req.params.id);
        res.send(meal);
    }catch(err){
        res.status(400).send(err);
    }
}
const getMealPlanById = async (req, res) => {
    try{
        let mealPlan = await MealPlan.findById(req.params.id);
        res.send(mealPlan);
    }catch(err){
        res.status(400).send(err);
    }
}
const getUserById = async (req, res) => {
    try{
        let user = await User.findById(req.params.id);
        res.send(user);
    }catch(err){
        res.status(400).send(err);
    }
}
const updateFood = async (req, res) => {
    try{
        let food = await Food.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true});
        res.send(food);
    }catch(err){
        res.status(400).send(err);
    }
}
const updateMeal = async (req, res) => {
    try{
        let meal = await Meal.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true});
        res.send(meal);
    }catch(err){
        res.status(400).send(err);
    }
}
const updateMealPlan = async (req, res) => {
    try{
        let mealPlan = await MealPlan.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true});
        res.send(mealPlan);
    }catch(err){
        res.status(400).send(err);
    }
}
const updateUser = async (req, res) => {
    try{
        let user = await User.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true});
        res.send(user);
    }catch(err){
        res.status(400).send(err);
    }
}
const deleteFood = async (req, res) => {
    try{
        let food = await Food.findByIdAndDelete(req.params.id);
        res.send(food);
    }catch(err){
        res.status(400).send(err);
    }
}
const deleteMeal = async (req, res) => {
    try{
        let meal = await Meal.findByIdAndDelete(req.params.id);
        res.send(meal);
    }catch(err){
        res.status(400).send(err);
    }
}
const deleteMealPlan = async (req, res) => {
    try{
        let mealPlan = await MealPlan.findByIdAndDelete(req.params.id);
        res.send(mealPlan);
    }catch(err){
        res.status(400).send(err);
    }
}
const deleteUser = async (req, res) => {
    try{
        let user = await User.findByIdAndDelete(req.params.id);
        res.send(user);
    }catch(err){
        res.status(400).send(err);
    }
}
module.exports = {
    createFood,
    createMeal,
    createMealPlan,
    createUser,
    getFood,
    getMeal,
    getMealPlan,
    getUser,
    getFoodById,
    getMealById,
    getMealPlanById,
    getUserById,
    updateFood,
    updateMeal,
    updateMealPlan,
    updateUser,
    deleteFood,
    deleteMeal,
    deleteMealPlan,
    deleteUser
}

