
exports.up = function(knex) {
    return knex.schema
        .creatTable("project", tbl => {
            tbl.increments()
            tbl
                .unique()
                .string("name", 1000)
                .string("description", 1000)
                .notNullable()
                .boolean("completed").defaultTo(false);
                
        })
        
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('project')
};
