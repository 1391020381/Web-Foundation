# 使用者与群组

1. 文件拥有者
2. 群组概念

- 群组最有用的功能之一,就是当你在团队开发资源的时候啦。
- 每个账号都可以由多个群组的支持,同一个群组我们可以设定权限,好让某些用户个人的信息不被群组的拥有者查询,以保证有个人的私人空间,而设定群组共享,则让大家共同分享

3. 其他人的概念
4. root

## Linux 用户身份与群组记录的文件

- /etc/passwd
- etc/shadow

# Linux 文件权限概念

## 如何修改文件属性与权限

- 改变一个文件的群组,直接以 chgrp(change group) 来改变

* 要被改变得组名必须要在/etc/group 文件内存在才行。

* chgrp : 改变文件所属群组
* chown: 改变文件拥有者
* chmod： 改变文件的权限, SUID SGID SBIT 等等的特性
