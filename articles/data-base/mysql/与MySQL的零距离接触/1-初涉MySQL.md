1. MySQL基础
2. 安装MySQL
3. 配置MySQL
4. 使用MySQL

# MySQL基础
* mysql有瑞典Mysql ab公司开发,目前属于Oracle公司。
* MySQL是一个开源的关系型数据库管理系统
* Mysql分为社区版和企业版
# Mysql安装方式(官网下载)
* MSI安装 (windows installer)
* zip安装
1. 双击MSI安装文件
2. 最终用户许可协议
3. 选择安装类型
* Typical 典型
* Custom  自定义
* Complete 完全
4. 准备安装
5. 安装进度
6. Mysql产品广告
7. 询问是否进行配置操作   Launch the MySQL instance configuration wizard (演示不选择)

# 配置Mysql 5.1
1. 运行MySQL配置向导文件
* bin目录下的MySQLIntanceConfig.exe
# 配置向导欢迎界面
# 选择配置类型
* Detailed Configuration
* Standard Configuration 选择 标准
# 是否安装为Windows服务
# 设置root用户的密码
# 执行

* my.init  [mysqld] 设置mysql服务器相关

* bin 可以执行文件
* data 存储数据文件
* docs文档
* include目录  存储包含的头文件
* lib 存储库文件
* share 错误消息和字符集文件
# 启动服务
* net start mysql
* net stop mysql
# mysql 登录
* mysql -uroot -p -P3306 -h127.0.0.1
# mysql退出
* exit;
# 修改Mysql提示符
* MySQL -uroot -proot --prompt提示符<\D \d \h \u>

# MySQL常用命令以及语法规范
* SELECT VERSION();
* 关键字与函数名称全部大写
* 数据库名称、表名称、字段名称全部小写
* sql语句必须以分号结尾。
# 操作数据库
*  CREATE {DATABASE | SCHEMA} [IF NOT EXISTS] db_name [DEFAULT] CHARACTER SET [=] charset_name
* {} 必选项 有 | 表示其中一个
* []可选
* SHOW WARINGS
* show create database t1;
* ALTER {DATABASE | SCHEMA} [IF NOT EXISTS] db_name [DEFAULT] CHARACTER SET [=] charset_name
* DROP {DATABASE | SCHEMA} [IF NOT EXISTS] db_name 






