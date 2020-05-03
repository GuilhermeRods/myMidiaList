export const up = knex => knex.schema.createTable('seasons', table => {
  table.increments()
  table.string('number_season')
  table.text('description')
  table.timestamps(true, true)
  table.timestamp('deleted_at')

})

export const down = knex => knex.schema.dropTable('seasons')