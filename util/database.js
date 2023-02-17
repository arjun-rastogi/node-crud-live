const Sequelize = require("sequelize");

const sequelize = new Sequelize(
    process.env.PG_DATABASE,
    process.env.PG_USER,
    process.env.PG_PASSWORD,
    {
        host : process.env.PG_HOST,
        dialect : "postgres",
        host : process.env.PG_HOST,
    }
);

module.exports = sequelize;