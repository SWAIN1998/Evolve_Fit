const express = require('express');
const router = express.Router();
const {createFood,
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
    deleteUser} = require('../controller/foodCtrl');
router.post('/food', createFood);
router.post('/meal', createMeal);
router.post('/mealPlan', createMealPlan);
router.post('/user', createUser);
router.get('/food', getFood);
router.get('/meal', getMeal);
router.get('/mealPlan', getMealPlan);
router.get('/user', getUser);
router.get('/food/:id', getFoodById);
router.get('/meal/:id', getMealById);
router.get('/mealPlan/:id', getMealPlanById);
router.get('/user/:id', getUserById);
router.put('/food/:id', updateFood);
router.put('/meal/:id', updateMeal);
router.put('/mealPlan/:id', updateMealPlan);
router.put('/user/:id', updateUser);
router.delete('/food/:id', deleteFood);
router.delete('/meal/:id', deleteMeal);
router.delete('/mealPlan/:id', deleteMealPlan);
router.delete('/user/:id', deleteUser);
module.exports = router;
