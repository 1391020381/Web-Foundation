import Sequelize from 'sequelize';
const sequelize = new Sequelize('nodelover', 'root', 'GHzXlxXYg9&G' || 'justdoit', {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});

async function main() {
    try {
        await sequelize.authenticate()
        console.log('sequelize 已经连接成功啦！')
        process.exit(0)
    } catch (e) {
        console.log(e)
    }
};
main()