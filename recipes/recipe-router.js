const express = require('express');

const Recipes = require('./recipe-model');

const router = express.Router();

router.get('/', (req, res)=> {
    Recipes.getRecipes()
        .then(recipes => {
            res.status(200).json(recipes)
        })
        .catch(err => {
            console.log(err.message)
            res.status(500).json({errorMessage: 'failed to get recipes'})
        })

})

router.get('/:id/ingredients', (req, res)=>{
    const {id} = req.params;
    Recipes.getShoppingList(id)
        .then(ingredients => {
            res.status(200).json(ingredients)
        })
        .catch(err=> {
            console.log(err.message)
            res.status(500).json({errorMessage: 'failed to get ingredietnts'})
        })
})
router.get('/:id/instructions', (req, res)=>{
    const {id} = req.params;
    Recipes.getInstructions(id)
        .then(instructions => {
            res.status(200).json(instructions)
        })
        .catch(err=> {
            console.log(err.message)
            res.status(500).json({errorMessage: 'failed to get instructions'})
        })
})

module.exports = router;