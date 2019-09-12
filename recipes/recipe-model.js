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
    .join('recipe_ingredients', 'recipe_ingredients.recipe_id', 'recipes.id')
    .join('ingredients', 'ingredients.id', 'recipe_ingredients.ingredient_id' )
    .where({"recipes.id": id})

}

function getInstructions(id){
    return db('recipes')
    .select(['instructions.step_number', 'instructions.step_text'])
    .join('instructions', 'recipes.id', 'instructions.recipe_id')
    .where({"recipes.id": id})
    .orderBy('instructions.step_number', 'asc')

}