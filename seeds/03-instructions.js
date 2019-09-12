
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('instructions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        {id: 1, step_number: 1, step_text: 'buy ingredients', recipe_id: 1},
        {id: 2, step_number: 2, step_text: 'place cold items in fridge', recipe_id: 1},
        {id: 3, step_number: 3, step_text: 'combine dry ingredients', recipe_id: 1},
        {id: 4, step_number: 1, step_text: 'melt chocolate', recipe_id: 2},
        {id: 5, step_number: 2, step_text: 'pour over ice cream', recipe_id: 2},
        {id: 6, step_number: 3, step_text: 'enjoy', recipe_id: 2},
        {id: 7, step_number: 1, step_text: 'combine ingredients', recipe_id: 3},
        {id: 8, step_number: 2, step_text: 'sprinkle salt and enjoy', recipe_id: 3},

      ]);
    });
};
