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
prod_id       唯一的产品ID
vend_id       产品供应商ID (关联到vendors表中的vend_id)
prod_name     产品名
```