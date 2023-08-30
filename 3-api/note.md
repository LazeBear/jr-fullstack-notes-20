UDP

application layer

OSI model (5/7)

HTTP 0.9
HTTP 1.0
HTTP 1.1
HTTP 2
HTTP 3

HTTP(S)

certificates / Let's Encrypt

DNS
Domain -> ip

http 报文

{
name: "mason",
age: 18
}

PUT
{
name: "james",
age: 20
}

PATCH
{
name: "mason",
age: 20
}

serialization/deserialization

trailing comma
js object
{
name: "james",
age: 20,
}

json
{
"name": "james",
"age": 20,
}

A, B

A, B == B, A

A, B
B X

Restful API 设计规范

1. 给 api 加上版本（versioning）
   example.com/v1/users
   example.com/v2/users
   example.com/api/v1/users
   api.example.com/v1/users

2. 用名词来描述资源，并且使用复数形式
   /users
   /news

3. 使用相应的 http method 来描述 api 的操作
   GET -> 获取数据
   POST -> 添加数据
   。。。

4. 设计 url 的时候，可以使用嵌套结构
   /users/{userId}/posts
   /users/:userId/posts/:postId

5. 使用合适的 status code 来描述请求的结果
   200 -> ok
   201 -> created

6. 注意返回数据的大小 -》 进行分页
   GET /users
   总 users 10000 个
   一次返回 1 页，每页 10/100 个

返回第一页的 10 个 user
GET /users?page=1&pageSize=10
返回第二页的 100 个 user
GET /users?page=2&pageSize=100
default: page=1, pageSize=10/100

7. 返回具体的错误信息
   400
   {
   "message": "password is too weak"
   }

API authorization

fe page /news

/api/news + token

redirect -> /login

token

sequence diagram
时序图

local, dev, staging, production

flag
