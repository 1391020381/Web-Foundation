* [与MySQL的零距离接触](https://www.imooc.com/learn/122)

# 初涉MySQL
1. MySQL概述
2. MySQL的安装与配置
3. 启动与停止MYSQL服务
4. mysql登录与退出
5. 修改MySQL提示符
6. Mysql常用命令以及语法规则
6. 操作数据库
# 数据库类型与操作数据表
1. 整型 int
2. 浮点型
3. 日期时间型
4. 字符型
5. 创建数据库
*  create table [IF NOT EXISTS] table_name(
    column_name data_type,
)
6. 查看数据表
7. 查看数据表结构
8. mysql记录的插入与查找 
* insert select
9. mysql 空值与非空  Null   NOT NULL
10. mysql自动编号
* AUTO_INCREMENT
* 自动编号,且必须与主键组合使用
* 默认情况下,起始值为1，每次的增量为1.
11. 初涉主键约束
12. 唯一约束
14. 默认约束I

# 约束以及修改数据表
1. 外键约束的要求解析
## 约束
1. 约束保证数据的完整性和一致性
2. 约束分为表级约束和列级约束
3. 约束类型包括：
* NOT NULL
* PRIMARY KEY
* UNIQUE KEY
* DEFAULT
* FOREIGN KEY
##  FOREIGN KEY
* 保持数据一致性,完整性
* 实现一对一或一对多的关系。
## 外键约束的要求
1. 父表和子表必须使用相同的存储引擎,而且禁止使用零时表。
2. 数据表的存储引擎只能为InnoDB
3. 外键列和参数列必须具有相似的数据类型。其中数字的长度或是是否有符号位必须相同；而字符的长度则可以不同。
4. 外键列和参照列必须创建索引。如果外键列不存在索引的话,Mysql将自动创建索引。
## 编辑数据表的默认存储引擎
* default-storage-engine = INNODB
* show create table test
* pid smallint primary key (pid) reference tableName(id) 
## 外键约束的参照操作
1. CASCADE: 从父表删除或更新且自动删除或更新子表中匹配的行
2. SET NULL:从父表删除或更新行,并设置子表中的外键列为NULL。如果使用该选项,必须保证子表列没有指定NOT NULL
3. RESTRICT:拒绝对父表的删除或更新操作
4. NO ACTION:标准SQL的关键字,在mysql中与RESTRICT相同


* `逻辑外链采用表间的逻辑关系，而不是用FOREIGN KEY关键字`

## 表级约束与列级约束
1. 对一个数据列建立的约束,称为列级约束
2. 对多个数据列建立的约束,称为表级约束。
3. 列级约束既可以在列定义时声明,也可以咋列定义后声明。表级约束只能在列定义后声明。
2. 修改数据表
* 添加/删除列
* 添加/删除约束
* 修改列定义和更名数据表
*  ALTER TABLE tabl_name ADD/DROP[COLUMN] col_name column_definition[FIRST|AFTER col_name]
# 操作数据表的记录
1. 插入记录 INSERT
2. 单表更新记录 update
3. 单表删除 delete
4. 查询表达式解析
5. where
6. group by
7.  having语句设置分组条件
8. order by 排序
9. limit 限制查询数量

# 子查询与链接
1. 