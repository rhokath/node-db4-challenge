const db = require('../data/db-config');

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions

}

function getRecipes(){
    return db('recipes');

}

function getShoppingList(id){
    return db('recipes')
    .select('ingredients.ingredient')
    .join('ingredients', 'recipes.id', 'ingredients.id')
    .where({"recipes.id": id})

}

function getInstructions(id){
    return db('recipes')
    .select(['instructions.step_number', 'instructions.step_text'])
    .join('instructions', 'recipes.id', 'instructions.id')
    .where({"recipes.id": id})
    .orderBy('instructions.step_number')

}