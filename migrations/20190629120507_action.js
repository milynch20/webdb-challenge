
exports.up = function(knex) {
    return knex.schema
        .creatTable("action", tbl => {
            tbl.increments()
            tbl
                .unique()
                .string("decription", 128)
                .string("notes", 128)
                .boolean("false");
        })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('action');
};
