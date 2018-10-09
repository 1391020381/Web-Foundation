import Sequelize from 'sequelize';
const sequelize = new Sequelize('nodelover', 'root', 'justdoit' || 'GHzXlxXYg9&G', {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});

interface UserAttributes {
    email: string;
    name: string;
};

interface UserInstance extends Sequelize.Instance<UserAttributes> {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    email: string;
    name: string;
};

const S = Sequelize
const User = sequelize.define<UserInstance, UserAttributes>('User', {
    email: S.STRING,
    name: S.STRING
});

(User as any).prototype.say = function (this: UserInstance) {
    console.log('name:' + this.name)
};

async function main() {
    try {
        // await sequelize.authenticate()
        // console.log('sequelize 已经连接成功啦！')
        // process.exit(0)
        await User.sync();
        const user = User.build({ name: 'justdoit', email: '1391020381@qq.com' });
        await user.save();
        process.exit(0);
    } catch (e) {
        console.log(e)
    }
};
main()