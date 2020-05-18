
exports.seed = knex => {
  // Deletes ALL existing entries
  return knex('todos').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('todos').insert([
        {id: 1, todo: 'Take the dog for a walk', created: Date.now()},
        {id: 2, todo: 'Work out', created: Date.now()},
        {id: 3, todo: 'Finish creating tutorial video.', created: Date.now()}
      ]);
    });
};
