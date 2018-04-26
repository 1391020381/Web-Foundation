# vendors表
 * vendors 表存储销售产品的供应商。每个供应商在这个表中有一个记录,供应商ID(vend_id)列用来匹配商品和供应商。
```
 vend_id         唯一供应商ID 主键 自增
 vend_name
 vend_address
 vend_city
 vend_state
 vend_zip
 vend_country
```

#  products 表
* products 表包含产品目录,每行一个产品。每个产品有唯一的ID(prod_id列),通过vend_id(供应商的唯一ID)关联到它的供应商。
```
prod_id       唯一的产品ID    主键
vend_id       产品供应商ID (关联到vendors表中的vend_id)    外键
prod_name     产品名
prod_price    产品价格
prod_desc     产品描述
```

# customers 表
* customers 表存储所有顾客的信息。每个顾客有唯一的ID(cust_id列)
```
 cust_id                  唯一的顾客ID   主键自增
 cust_name
 cust_address
 cust_city
 cust_state               顾客的州
 cust_zip                 顾客的邮编编码
 cust_country
 cust_contact             顾客的联系名
 cust_email
```

#  orders 表
 * orders表存储顾客订单(但不是订单细节)。每个订单唯一地编号 (order_num列)。订单用 cust_id 列(关联到customer表唯一ID)与相应的顾客关联。
 ```
 order_num        唯一订单号  主键
 order_date
 cust_id           订单顾客ID(关系到customers表的cust_id)  外键

 ```

 # orderitems 表
 * orderitems 表存储每个订单中实际物品,每个订单的每个物品占一行。对orders中的每一行,orderitems中有一行或多行。每个订单物品有订单号加订单物品(第一个物品、第二个物品等)唯一标识。
 通过order_num(关联到orders中订单的唯一ID)与它们相应的订单相关联。 prod_id关联products表
 ```
  order_num               订单号 (关联到orders表的order_num)
  order_item              订单物品号(在某个订单中顺序)
  prod_id                 产品ID (关联到products表中prod_id)
  quantity               物品数量



   order_num 和 order_item 作为主键

   order_num  prod_id  外键
 ```
 # productnotes表
 * productnotes表存储与特定产品有关的注释。并非所有产品都有相关注释,而有的产品可能有许多的注释。
 ```
 note_id           唯一注释 ID      主键
 prod_id           产品ID (对应与products表中的prod_id)
 note_date         增加注释的日期
 note_text        注释文本     必须为 FULLTEXT搜索进行索引           ENGINE = MyISAM


 ```

 * 供应商   vend_id     商品  prod_id      vend_id
 * 顾客   cust_id   订单  order_num   cust_id
 * 订单实际商品  order_num<订单>  prod_id <商品>
 * 注释   note_id   prod_id <商品>