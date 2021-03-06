* Sequelize中有四种类型的关联。
* `表的关联都是相对里面某行数据来说的，某一行数据可以关联另一个表某一行的数据`
1. BelongsTo
2. HasOne
3. HasMay
4. BelongsToMany
* Source & Target
```
const User = sequelize.define('User',{
    name:Sequelize.STRING,
    email:Sequelize.STRING
});
const Project = sequelize.define('Project',{
    name:Sequelize.STRING
});

User.hasOne(Project)

User模型(函数被调用的模型)是source。Project模型(作为参数传递的模型)是target
```
# 一对一关联
* 一对一关联是通过单个外键连接的两个模型的关联。
* `BelongsTo 关联实在 source model上存在一对一关联的外键的关联`
```
const Player = this.sequelize.define('player',{});
const Team = = this.sequelize.define('team',{});
Player.belongsTo(Team); // 将向Player添加一个 teamId属性一保存Team的主键值

```

## 外键 
* 默认情况下,将从目标模型名称和目标主键名称生成belongsTo关系的外键。 
## 目标键
* 目标键是源模型上的外键列指向目标模型上的列。belongsTo关系的目标键是目标模型的主键。

# HasOne
* HasOne关联是在 target model上存在一对一关联的外键的关联。
```
const User = sequelize.define('user',{})
const Project = sequelize.define('project',{})
Project.hasOne(User)

// hasOne 将向User模型添加一个 projectId属性
```
## 源键
* 源关键是源模型中的属性,它的目标模型指向外键属性。默认情况下,hasOne关系的源键将是源模型的主要属性。
  
`HasOne在target模型中插入关键键,而BelongsTo将关联键插入到source模型中`  

# 一对多关联
* hasMany
* 一对多关联将一个来源与多个目标连接起来。而多个目标接到同一个特定的源。
```
const User = sequelize.define('user',{});
const Project = sequelize.define('project',{})
Project.hasMany(User,{as:'Workers'})

// 这会将 projectId属性添加到User。根据你的设置,表中列表被称为 projectId 或project_id。
// Project的实例将获得访问器getWorkers和setWorkers
```
* `例如上面的解释(每行数据都加了projectId)似乎也是一对一,是怎么表现一对多？`
# 多对多的关联
* 多对多的关联用于将源于多个目标连接。此外,目标也可以连接到多个源。
  
```
User.beblongsToMany(Tag, {through: 'user_tag'});
Tag.belongsToMany(User, {through: 'user_tag'});

```  
* 在多对多关系的表结构中,无论我们把关系id存在任何一个表中,会出现数据冗余的问题,所以在多对多关系下的表结构需要第三个表来保存它们之间的关系。
* 第三张表，就是上面的user_tag。里面有一个userId和tagId字段。

# 关系映射：一对一
* 在`一对一关系`中,A表中的一行最多只能匹配于B表中的一行,反之亦然。如果相关列都是主键或都具有唯约束,则可以创建一对一关系。
* 这种关系并不常见,因为一般来说,按照这种方式相关的信息都在一个表中。可以利用一对一关系来：
1. 分割具有多列的表。
2. 由于安全原因而隔离表的一部分。
3. 保存临时的数据,并且可以毫不费力地通过删除该表而删除这些数据。
4. 保存只适用于主表的子集的信息。

* `创建标的时候，我自己现在的理解是，暂时规定了这个表的主要字段以及和其他表的关系。例如和和其他表的关系时一对一或一对多`
* `我们也要注意添加的时候我们是怎么样，添加数据的时候这些数据之间的关系是怎么样的，一对一和多对一。`