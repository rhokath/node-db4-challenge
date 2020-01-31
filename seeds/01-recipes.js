
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {id: 1, recipe_name: 'Chocolate Cake'},
        {id: 2, recipe_name: 'Ice Cream Sundae'},
        {id: 3, recipe_name: 'Mashed Potatos'}
      ]);
    });
};
