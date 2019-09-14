const UsersService = {
    getAllUsers(knex){
        return knex.select('*').from('blogful_users')
    },
    insertUser(knex, newUser){
        return knex
            .insert(newUser)
            .into('blogful_users')
            .return('*')
            .then(rows => rows[0])
    },
    getById(knex, id){
        return knex
            .select('*')
            .from('blogful_users')
            .where('id', id)
            .first()
    },
    deleteUser(knex, id){
        return knex('blogful_users')
            .where({ id })
            .delete()
    },
    updateUser(knex, id, newUserFields){
        return knex('blogful_users')
            .where({ id })
            .update(newUserFields)
    }
}

module.exports = UsersService