# 部门表
> bumen

|字段|类型|说明|备注|
|---|---|---|---|
|id|int|编号|主键|
|name|String|部门名称||

# 车辆表
> car

|字段|类型|说明|备注|
|---|---|---|---|
|id|int|编号|主键|
|name|String|车牌号||

# 车类型表
> car_type

|字段|类型|说明|备注|
|---|---|---|---|
|id|int|编号|主键|
|name|String|车辆类型||

# 场次表
> changci

|字段|类型|说明|备注|
|---|---|---|---|
|id|int|编号|主键|
|name|String|场次||

# 车保险表
> chebao

|字段|类型|说明|备注|
|---|---|---|---|
|id|int|编号|主键|
|name|String|车保险||

# 考场表
> kaochang

|字段|类型|说明|备注|
|---|---|---|---|
|id|int|编号|主键|
|name|String|考场名称||

# 考试信息表
> kaoshiinfo

|字段|类型|说明|备注|
|---|---|---|---|
|id|int|编号|主键|
|user_id|int|用户id||
|kaochang_id|int|考场id||
|chengji|Strng|考试成绩||

# 考试计划表
> kaoshijihua

|字段|类型|说明|备注|
|---|---|---|---|
|id|int|编号|主键|
|riqi|String|日期||
|kaochag_id|int|考场id||
|schoold_id|int|学校id||
|renshu|String|人数||
|kemu_id|int|科目id||
|cartype_id|int|车型id||
|changci_id|int|场次id||
|time|date|录入时间||



# 科目表
> kemu

|字段|类型|说明|备注|
|---|---|---|---|
|id|int|编号|主键|
|name|String|科目名称||

# 约车练车表
> lianche

|字段|类型|说明|备注|
|---|---|---|---|
|id|int|编号|主键|
|user_id|int|用户id||
|teacher_id|int|教练id||
|kaochang_id|int|考场id||
|yue_id|int|预约id||
|begin_time|String|练车开始时间||
|end_time|String|练车结束时间||


# 订单表
> order

|字段|类型|说明|备注|
|---|---|---|---|
|id|int|编号|主键|
|name|String|订单名称||

# 人保险表
> renbao

|字段|类型|说明|备注|
|---|---|---|---|
|id|int|编号|主键|
|name|int|保险名称||
|user_id|int|被保用户||

# 加盟校表
>school

|字段|类型|说明|备注|
|---|---|---|---|
|id|int|编号|主键|
|name|int|学校名称||

# 商品表
>sp

|字段|类型|说明|备注|
|---|---|---|---|
|id|int|编号|主键|
|name|int|商品名称||

# 商品类型表
>sp_type

|字段|类型|说明|备注|
|---|---|---|---|
|id|int|编号|主键|
|name|int|商品分类名称||

# 教练表
>teacher

|字段|类型|说明|备注|
|---|---|---|---|
|id|int|编号|主键|
|name|int|教练名||
|car_id|int|关联车辆ID||

# 用户表
>User

|字段|类型|说明|备注|
|---|---|---|---|
|id|int|编号|主键||
|username|String|账号||
|name|String|姓名||
|password|String|密码MD5||
|reg_time|String|注册时间||
|phone|String|手机号||
|money|numeric|账户余额||
|userstype_id|int|账户类型||

# 用户类型表
>UserType

|字段|类型|说明|备注|
|---|---|---|---|
|id|int|编号|主键||
|name|String|类型名称||
|status|String|账号类型状态|禁止启用使用|

# 约车设置表
>yue_set

|字段|类型|说明|备注|
|---|---|---|---|
|id|int|编号|主键||
|name|String|设置项||
|val|String|设置值||