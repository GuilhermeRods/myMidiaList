
export const up = knex => knex.schema.createTable('users', table => {
  table.uuid('id').primary()
  table.string('name').notNullable()
  table.string('email').notNullable().unique()
  table.string('password').notNullable()
  table.timestamps(true, true)
  table.timestamp('deleted_at')
})

export const down = knex => knex.schema.dropTable('users')