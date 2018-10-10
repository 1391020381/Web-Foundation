import Sequelize from 'sequelize';
const sequelize = new Sequelize('nodelover', 'root', 'justdoit', {
    host: '127.0.0.1',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
});
const S = Sequelize;
interface UserAttributes {
    email: string;
    name: string;
}
interface UserInstance extends Sequelize.Instance<UserAttributes> {
    id: number;
    createAt: Date;
    updateAt: Date;
    email: string;
    name: string;
};

const User = sequelize.define<UserInstance, UserAttributes>('User', {
    email: S.STRING,
    name: S.STRING
});
(User as any).prototype.say = function (this: UserInstance) {
    console.log('name:', this.name)
}
interface BookAttributes {
    id: number;
    status: "inSale" | "noSale";
    description: string;
    title: string;
    author: string;
}
interface BookInstance extends Sequelize.Instance<BookAttributes> {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    status: "inSale" | "noSale";
    description: string;
    title: string;
    author: string;
};
