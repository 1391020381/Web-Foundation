# Migrations -迁移
* 就像你使用Git/SVN来管理源代码的更改一样,你可以使用迁移来跟踪数据库的更改。通过迁移,你可以将现有的数据库转移到另一个装态,反之亦然：这些装态转换将保存在迁移文件中,它们描述了如何进入新状态以及如何还原更改以回复旧状态。
* 需要使用到 Sequelize cli 。CLI支持迁移和项目引导。

1. npx sequelize init <注意 egg 中下面文件的的位置>
* config 包含配置文件,它告诉CLI如何连接数据库 如果数据库还不存在，需要创建
* models 包含你的项目的所有模型。
* migrations 包含所有迁移文件
* seeders 包含所有种子文件

# 创建第一个模型（和迁移）
```
npx sequelize model:generate --name User --attributes firstName:string,lastName:string,email:string
```
* models 文件夹中创建了一个 user模型文件
* 在 migrations 文件夹中创建了一个名字像 xxxxx--create-user.js的迁移文件
* sequelize将只使用模型文件，它是表的描述。另一边,迁移文件是该模型的更改,或更具体的说是CLI所使用的表。处理迁移,如提交或日志，以进行数据库的某些更改。

# 运行迁移
* 直到这一步,CLI没有将任何东西插入数据库。我们刚刚为我们的第一个模型User创建了必须的模型和迁移文件。现在要在数据库中实际创建该表。需要运行 db:migrate 命令
* npx sequelie db:migrate
* 将在数据库中确保一个名为SequelizeMeta的表。此表用于记录在当前数据库上运行的迁移
* 开始寻找尚未运行的任何迁移文件。这可以通过检查 SequelizeMeta表。在这个例子中，它将运行我们创建的xxxxx-crate-user.js
* 创建一个名为 Users的表其中包含其迁移文件中指定的所有列。

# 撤销迁移
* npx sequelize db:migrate:undo  恢复最近的迁移
* npx sequelize db:migrate:undo:all

# 创建第一个种子
* npx sequelize seed:generate --name demo-user
* npx sequelize db:seed:all   将执行该种子文件,将有一个演示用户插入user表。
* npx sequelize db:seed:undo 取消最近
* npx sequelize db:seed:undo --seed name-of-seed-as-in-data

# .sequelizerc文件
* 这是一个特殊的配置文件。它允许你指定通常作为参数传递给CLI的各种选项。在某些情况下，可以使用它
* 覆盖 migrations models seeders config 文件夹路径
* 重命名 config.json 为database.json
```
.sequelizerc

const path = require('path');

module.exports = {
  'config': path.resolve('config', 'config.js')
}
```
* config.js 使用环境变量

* `Sequelize CLI将加载 config/config.js 以获取配置选项。`

# sequelize-cli
* [sequelize-cli](https://github.com/sequelize/cli)
* npm install --save-dev sequelize-cli