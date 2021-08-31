# 部门列表

> 总路径：/api/bumen/list
* 地址：`/bumen/list`
* 演示地址：[http://localhost:1001/api/bumen/list?name=学校&pagenum=1&pagesize=10](http://localhost:1001/api/bumen/list?name=学校&pagenum=1&pagesize=10)
* 请求方式：`GET` [GET 和 POST 均支持，建议使用 POST]
* 请求参数


|字段|说明|是否必须|类型|
|---|---|---|---|
| `name` |`部门名称`|`N`|`String`|
| `pagenum` |`每页显示几条(1)`|`Y`|`String`|
| `pagesize` |`显示几页(10)`|`Y`|`String`|


* 返回参数 

``` json
{
    "status": 200,
    "total": 1,
    "list": [
        {
            "id": 1,
            "name": "学校"
        }
    ]
}
```

* 返回字段说明

|返回值字段|字段说明|字段类型|备注|
|---|---|---|---|
|status|状态码|int|200 表示请求成功|
|total|状态码|int|当前页数|
|list|返回JSON对象|json|表示查询成功|
