
exports.up = async knex => {
  await knex.schema.createTable('todos', table => {
      table.increments();
      table.text('todo', 128).unique().notNullable();
      table.integer('created').notNullable();
  })
};

exports.down = async knex => {
  await knex.schema.dropTableIfExists('todos');
};
