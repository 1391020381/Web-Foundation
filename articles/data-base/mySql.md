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