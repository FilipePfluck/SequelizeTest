module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'docker',
    database: 'sequelize-teste',
    define: {
        timestamps: true,
        underscored: true
    }
}