import Sequelize from 'sequelize';

const sequelize = new Sequelize('nodelover', 'root', '', {
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
    id: object,
    userId: object,
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

const Book = sequelize.define<BookInstance, BookAttributes>('Book', {
    id: {
        type: S.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true
    },
    description: S.TEXT,
    status: {
        type: S.ENUM,
        values: ['inSale', 'noSale'],
        validate: {
            isIn: {
                args: [['inSale', 'noSale']],
                msg: "status field must be inSale or noSale"
            }
        }
    },
    title: {
        type: S.STRING,
        allowNull: false,
        get(this: BookInstance) {
            return this.getDataValue('author') + '-' + this.getDataValue('title')
        }
    },
    author: {
        type: S.STRING,
        allowNull: false,
        set(val: string) {
            // this.setDataValue('author', val.toLocaleLowerCase())
        }
    },
    userId: {
        type: S.STRING,
        references: {
            model: User
        }
    }
}, {
        comment: "图书表",
        indexes: [
            {
                fields: ['id']
            }
        ]
    })

import PhoneDefine, { PhoneAttributes, PhoneInstance } from './phone'

async function main() {
    try {
        const Phone = sequelize.import<PhoneInstance, PhoneAttributes>('./phone');
        await Phone.sync();
        let phone = await Phone.create({ name: "IPhone", type: "Apple" })
        console.log(2222)
    } catch (e) {
        if (e instanceof Sequelize.ValidationError) {
            console.log(e.message)
        }
    }
    process.exit(0)
}
// 测试是否会提交 history
main()
