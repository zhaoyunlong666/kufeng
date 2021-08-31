# 登录功能
* 地址：`/login`
* 演示地址：[http://localhost:9525/user/](http://localhost:9525/user/)
* 请求方式: `POST`
* 请求参数:

|字段|说明|是否必须|类型|
|---|---|---|---|
|`username`|`用户名`|`Y`|`String`|

* 返回参数
``` JSON
{
    "status":"0",
    "msg":"success"
}
```

* 返回字段说明
|返回值字段|字段说明|字段类型|备注|
|---|---|---|---|
|status|状态码|String|0 表示请求成功|
|msg|状态对应信息|String|有成功失败信息|

