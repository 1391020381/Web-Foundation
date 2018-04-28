# 了解sql
* 数据库是一个以某种有组织的方式存储的数据集合。
* 数据库软件应称为DBMS(数据库管理系统),数据库是通过DBMS创建和操作的容器。数据库可以使保存在设备上的文件,但也可以不是。
* 表某种特定类型数据结构化的清单。关键的一点在于,存储在表中的数据是一中类型的数据或一个清单。
* 数据库汇总的表都有一个名字,用来标识自己。是唯一的。
* 模式(schema)关于数据库和表的布局及特性的信息。
* 列(column) 表中的一个字段。所有表都是由一个或多个列组成的。
* 数据类型(datatype) 所容许的数据的类型。每个表列都有相应的数据类型,它限制(或容许)该列中存储的数据。
* 行,表中的数据是按行存储的,网格中垂直的列为列表,水平行为表行。
* 主键 表中每个行应该有可以唯一标识自己的一列(或一组列)
# 使用MySQL
* MySql在内部保存自己的用户列表,并且把每个用户与各种权限关联起来。  
## select:
  * use database
  * show database
  * show columns from database
  * 要想从一个表中检索多个列,使用相同的SELECT语句。唯一的不同 是必须在SELECT关键字后面给出多个列名,并以逗号隔开。
  * select * from produts
  * select distinct vend_id from products <返回不同的列行  distinct关键字,它必须直接放在列名的前面>
  * limit 5, 5 (指示MySQL返回从行 5开始的5行。 第一个数为开始位置,第二个数为要检索的行数。 如果行数不够,mysql将只返回它能返回的那么多行)
## 排序检索数据
* select语句的 order by子句
* select prod_id, prod_price,prod_name from products order by prod_price ,pord_name(重要的是理解在按多个列排序时,排序完全按所规定的顺序进行。换句话说,对于上述子中的输出,仅在多个行具有相同的 pro_price值时才对产品按 prod_name进行排序。如果prod_price列中所有值都是唯一的,则不会按prod_name排序。)
* select prod_id ,prod_pricd,prod_name from products order prod_price DESC<desc 关键字只应用到直接位于其前面的列名。>
* order by 子句的位置,在给出order by 子句时,应该保证它位于from子句之后。如果使用limit,它必须位于 order by 之后。使用子句的次序不对将产生错误消息。
## 过滤数据 
* 使用 select语句的where子句指定的搜索条件。
* select prod_name,prod_price from products where prod_price = 2.5
* order by 语句应该位于 where语句之后
* =  <> !=  <  <= > >=  between
* select prod_name,pod_price from products where prod_pice between 5 and 10
* 在一个列不包含值的时，称为包含空值NULL。  NULL 无值(no value) 它与字段包含0、空字符串或仅仅包含空格不同。
## 数据过滤
* 操作符(operator)用来联接或改变where子句的子句的关键字。也称为逻辑操作符(logical opertor)
* select prod_id,prod_price,pord_name from products where vend_id =1003 and prod_price <=10 <把两个过滤条件组何在一起。还可以添加多个过滤条件,没添加一条就要使用一个AND>
* select prod_name , prod_price from products where vend_id =1002 or vend_id =1003
* where 可以包含任意数目的and和or操作符。允许两者结合以进行复杂和高级的过滤
* select prod_name ,prod_price from products where (vend_id =1002 or vend_id =1003) and prod_price >=10;
* 在where子句中使用圆括号，任何时候使用具有and 和or操作符的where子句,都应该使用圆括号明确的分组操作符。消除歧义。
* select prod_name,prod_price from products where vend_id in (1002,1003) order by prod_name
* select prod_name ,prod_price from products where vend_id not in (1002,1003) order by prod_name
## 使用通配符进行过滤
 * 通配符 (wildcard) 用来匹配值的一部分的特殊字符。
 * 搜索模式(search pattern) 由字面值、通配符或者两者组合构成的搜索条件
 * like 指示 mysql后跟的搜索模式利用通配符匹配而不是直接相等匹配进行比较。
 * 通配符 % 表示任何字符串出现任意次数
 * select prod_id,prod_name from products where prod_name like 'jet%'
 * 根据mysqlDE 配置方式,搜索可以区分大小写的
 * 通配符可在搜索模式中任意位置使用,并且可以使用多个通配符。
 *  select prod_id,prod_name from products where prod_name like '%anvil%'
 * % 还能匹配0个字符串。% 代表搜搜模式中给定位置的0个、1个或多个字符。不能匹配NUll
 * 下划线 _ 下划线的用途与 % 一样,但下划线只匹配单个字符串而不是多个字符串。
 ## 使用正则表达式进行搜索
 # 创建计算字段
 * 计算子段并不是实际存在于数据库表中。计算字段是运行时在SELECT语句内创建的。
 * 一般来说,在数据库服务器上完成格式化操作比在客户机中完成要快的多,因为DBMS是设计来快速地完成这个处理的。
 * 在MySql的select的Concat()函数来拼接两个列。
 * select Concat(vend_name,'(',vend_country,')') from vendors order by vend_name
 * select Concat(RTrim(vend_name),'(',RTrim(vend_country),')') from vendors order by vend_name
 * 使用 别名 as
 * select Concat(RTrim(vend_name),'(',RTrim(vend_country),')') AS vend_title from vendors order by vend_name
 * 执行算数计算  select prod_id,quantity,item_price,quantity*item_prices AS expanded_price from orderitems where order_num = 2005
 * mysql 支持  + - * /
 # 使用数据处理函数
 * 大多数SQL实现支持一下类型的函数
 * 用于处理文本串
 ```
 select vend_name, Upper(vend_name) AS vend_name_upcase from vendors order by vend_name
 ```
 * 算数计算
 * 用于处理日期和时间值并从这些值中提取特定成分。
 *  返回DBMS正在使用的特殊信息。   
 # 汇总数据
 * 确定表中行数(或者满足满足某个条件或者包含某个特定值的行数)
 * 获得表中行组的和
 * 找出表列(最大值、最小值 平均值)   
 # 分组数据
 *  select vend_id ,count(*) as num_prods from products group by vend_id <group by 子句指示mysql分组数据,然后对数据每个组而不是整个结果集进行聚集>
 * havinng where  where在数据分组前进行过滤, having在数据分组后进行过滤
 * 一般在使用 GROUP BY 子句时，应该也给出 ORDER BY 子句。这是保证数据正确排序的唯一方法。千万不要仅依赖 GROUP BY 排序数据。
 * 子查询 <嵌套在其他查询中的查询>
 * select cust_id from orders where order_num in (select order_num from orderitems where prod_id = 'TNT2')
 * 在select语句中,子查询总是从内部往外处理
 * 作为计算字段使用查询 
 * select cust_name,cust_state,(select count(*) from orders where orders.cust.id = customers.cust._id) AS orders) from customer order by cust_name
 # 联结表
 * 关键是,相同数据出现多次决不是一件好事,此因素是关系数据库设计的基础。关系表的设计就是要保证把信息分解成多个表,一类数据一个表。各个表通过某些常用的值(即关系设计中的关系 relational)互相关联。
 *  外键(foreign key) 外键为某个表中的一列,它包含另一个表的主键,定义了两个表之间的关系。
 * 可伸缩性 能够适应不断增加的工作量而不失败。设计良好的数据库或应用程序称为可伸缩性好(sclae well)
 * 简单的说,联结是一种机制,用来在一条select语句中关联表,因此称为关联。
 ## 创建联结
  ```
  select vend_name,prod_name,prod_price from vendors,produts where vendors.vend_id =  products.vend_id order by vend_name,prod_name
  ```
  * 笛卡尔积(cartesian product) 由没有联结条件的表关系返回的结果为笛卡尔积。检索出的行的数目将是第一个表中的行数乘以第二个表中的行数。
  * 基于两个表之间相等测试。这个联结也称为内部联结。
  ```
  select vend_name,prod_name,prod_price  from vendors INNER JOIN products ON vendors.vend_id = products.vend_id
  ```
  * 优先使用 INNER JOIN
  * sql对一条select语句中可以联结的表的数目没有限制。创建联结的基本规则也相同。
  ```
select prod_name,vend_name,prod_price,quantity from orderitems,products,vendors
where products.vend_id = vendors.vend_id and orderitems.prod_id = products.prod_id
  ```
  # 创建高级联结
  ```
  select cust_name,cust_contact from customers AS c, orders as o , orderitems as oi where c.cust_id = o.cust_id and 
   oi.order_num = o.order_num and prod_id = 'tnt2'

  ```
  * 应该注意,表别名只在查询执行中使用。与列名不一样,表别名不返回到客户机。
  * 标准的联结(前一章中介绍的内部联结) 返回所有数据,甚至相同的列多次出现。自然联结排除多次出现,使每个列值返回一次。 系统不完成这项工作,由自己完成。
  * 联结包含了那些在相关表中没有关联行的行。这种类型的联结称为外部联结。
  ```
  select customers.cust_id ,orders.order_num from customers left outer join orders on customers.cust_id = orders.cust_id

  ```
  * right 指出的是 Outer join 有边的表  left指出的是  outer join做边的表
  # 组合查询
  * 多个SQL查询都只包含从一个或多个表中返回数据的单条select语句。mySQL也允许执行多个查询(多条select语句),并将结果作为单个查询结果集返回。
  这些组合查询通常称为 并 (union)或复合查询(compound query)
  * 有两个基本情况,其中需要使用组合查询: 在单个查询中从不同的表返回类似结构的数据      对单个表执行多个查询,按单个查询返回数据。
  * union的默认行为除重，可使用union all 而不是 union 使用union all mysql不取消重复的行
  * 在使用union组合查询时,只能使用一条order by 子句,它必须出现在最后一条select语句之后。
  * 可以组合不同的表
  # 全文本搜索
  * 最常使用的引擎为 MyISAM 和 InnoDB 前者支持全文本搜索，后者不支持。
  * 通配符   正则
  * 在使用全文本搜索时，MySQL不需要分别查看每个行，不需要分别分析和处理每个词。MySQL创建指定列中各词的一个索引，搜索可以针对这些词进行。这样，MySQL可以快速有效地决定哪些词匹配（哪些行包含它们），哪些词不匹配，它们匹配的频率，等等
  ```
   create table productontes
   (
   note_id        int       NOT NULL AUTO_INCREMENT
   prod_id       char(10)   NOT NULL
   note_date     daetime    NOT NULL
   note_text     text          NULL
   PRIMARY KEY(note_id),
   FULLTEXT(note_text)
   ) ENGINE = MyISAM
  ```
  * 在定义之后,MySQL自动维护该索引。在增加、更新或删除行时，索引自动更新
  * Mathc()指定被搜索的列 Against() 指定要使用的索引表达式
  * 使用查询扩展
  * 布尔文本搜索 即使没有定义 FULLTEXT索引,也可以使用
  # 插入数据 insert    <可针对每个表或每个用户,利用mysql安全机制禁止使用 inset语句>
  * 插入完整的行
  * 插入行的一部分
  * 插入多行
  *  插入某些查询结果
  * insert语句不会产生输出
  ```
  INSERT INTO customers(cust_name,cust_address,cust_city,cust_state,cust_zip,cust_country,cust_contact,cust_email)
   VALUES(NULL,'Pep E. LaPew','100 Main Street','Los Angeles','CA','90046','usa',NULL,NULL)

// 因为提供了列名,Values必须以指定的次序匹配指定的列名,不一定按各个列现在实际表中的次序。其优点是,
即使表的结构改变,此inset语句仍然可以工作。

使用这种语法，还可以省略列。这表示可以只给某些列提供值，给
其他列不提供值。

如果表的定义允许，则可以在 INSERT 操作中省略某
些列。省略的列必须满足以下某个条件。
  该列定义为允许 NULL 值（无值或空值）。
  在表定义中给出默认值。这表示如果不给出值，将使用默
认值。
如果对表中不允许 NULL 值且没有默认值的列不给出值，则
MySQL将产生一条错误消息，并且相应的行插入不成功
  ```
# 插入检索出的数据
 ```
 insert into customers () select cust_id ,cust_contact from custnew
 ```
 # 更新和删除数据  update delete
 ```
 update customers set cust_email = 'elmer@fudd.com',cust_name = 'The Fudds' where cust_id = 10005
 ```
 * 在update中使用子查询   UPDATE 语句中可以使用子查询，使得能用 SELECT 语句检索出的数据更新列数据。
 * delete  DELETE 不需要列名或通配符。 DELETE 删除整行而不是删除列。为了删除指定的列，请使用 UPDATE 语句。
 # 创建表
 * MySql语句中忽略空格。语句可以在一个长行上输入,也可分成许多行。在创建新表时,指定的表名必须不存在,否则将出错。
 * NUll值就是没有值或者缺值。允许NUll值的列也允许在插入行的时候不给出该列的值。不允许Null值的列不接受该列没有值的行,换句话说,在插入或更新行时,该列必须有值。
 * 不要把Null值与空串相混淆。NUll值是没有值,它不是串。NULL值用关键字NULL而不是空串指定。
 * 主键值必须唯一。即,表中的每个行必须具有唯一的主键值。如果主键使用单个列,则它的值必须唯一。如果使用多个列,则这些列的组合值必须唯一。
 * PRIMARY KEY (order_num,order_item)
 * AUTO_INCREMENT告诉MySql,本列每当增加一行时自动增量。
 * 每个表只允许一个AUTO_INCREMENT列,而且它必须被索引(如,通过使它成为主键)
 * select last_insert_id() 返回最后一个AUTO_INCREMENT值,然后可以将它作用与后续的Mysql语句
 * default  指定默认值
 * 使用默认值而不是NULL值 许多数据库开发人员使用默认值而不是NULL列,特别是对用于计算或数据分组的列更是如此。
 * 引擎类型
 *  mySql打包多个引擎。为不同的任务选择正确的引擎能获得良好的功能和灵活性。如果省略 ENGINE= 语句，则使用默认引擎（很可能是 MyISAM ）
 * 以下是几个需要知道的引擎：
 * InnoDB 是一个可靠的事务处理引擎（参见第26章），它不支持全文本搜索；
 * MEMORY 在功能等同于 MyISAM ，但由于数据存储在内存（不是磁盘）中，速度很快（特别适合于临时表）；
 * MyISAM 是一个性能极高的引擎，它支持全文本搜索（参见第18章），但不支持事务处理。
 * 引擎类型可以混用。 外键不能跨引擎。
 * 更新表
 * 删除表  drop table customers2
 * 重命名  rename table customers TO customers
 # 使用视图
 * 可以把整个查询包装成一个 虚拟表
 * 重要的是知道视图仅仅是用来查看存储在别出的数据的一种设施。视图本身不包括数据,因此它们返回的数据是从其他表中检索出来的。
 * 视图为虚拟的表。它们包含的不是数据而是根据需要检索数据的查询。
 视图提供了一种MySql的select语句层次的封装,可以来简化数据处理以及重新格式化基础数据或保护基础数据。
 * 使用存储过程
 * 可以创建存储过程。存储过程简单来说,就是为以后的使用而保存的一条或多条MySql语句的集合。可将其视为批文件,虽然它们的作用不仅限于批处理。
 * 执行存储过程
 ```
 call productpricing(@pricelow,@pricehigh,@priceaverage)
 ```
 * 使用游标
 * 有时,需要在检索出来的行中前进或后退一行或多行。这就是使用游标的原因。游标是一个存储在
 MySql服务器上的数据库查询,它不是一条selecct语句,而是被该语句检索出来的结果集。
 #  使用触发器
 * 触发器是MySql响应以下任意语句而自动执行的一条语句
 * delete   insert  update
 ```
 create trigger newproduct after insert on products for each row select 'product added'
 ```
 * 触发器按每个表每个事件每次地定义,每个表每个事件每只允许一个触发器。
* 管理事务处理
   * 事务处理可以用来维护数据库的完整性,它保证成批的MySql操作要么完全执行,要么完全不执行。
   * 事务处理是一种机制,用来管理成批执行MySql操作,以保证数据库不包含不完整的操作结果。利用事务处理,可以保证一组操作不会中途
   停止,它们或者作为整体执行,或者完全不执行(除非明确指示)。如果没有错误发
生，整组语句提交给（写到）数据库表。如果发生错误，则进行回退（撤销）以恢复数据库到某个已知且安全的状态
   *  事务(transaction) 指一组SQL语句
   * 回退(rollback)指撤销指定SQL语句的过程
   * 提交(commit)指将未存储的sql语句结果写入数据库表
   * 保留点 (savepoint) 指事务处理中设置的临时占位符(place-holder),你可以对它发布回退(与回退整个事务处理不同)