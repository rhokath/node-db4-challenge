
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {id: 1, ingredient: 'milk'},
        {id: 2, ingredient: 'egg'},
        {id: 3, ingredient: 'flour'},
        {id: 4, ingredient: 'potato'},
        {id: 5, ingredient: 'butter'},
        {id: 6, ingredient: 'chocolate'},
        {id: 7, ingredient: 'salt'},

      ]);
    });
};
