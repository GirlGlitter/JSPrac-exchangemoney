# JSPrac

### 汇率计算器

一.实现流程

原生js的小demo，思路并不难。

就是获取节点→更新节点+事件监听

二.关键知识点

- Json & fetch

    fetch：使用fetch获取数据并更新到程序中

    `fetch('item.json').then( (res)=>res.json().then(data=>console.log(data)));`
    res 返回的是个 response ，我们需要的数据并不在response中，故做 res.json() 处理，得到我们想要的json数据

- get请求
    http有多种请求方法，当我们加载页面或者是从服务器中获取数据的时候 就属于get请求

    提交数据：post请求

    更新or替换服务器上的数据时：put请求

    从服务器删除内容：delete请求
- then方法

    定义在原型对象promise.propstype上的方法

    用fetch api请求的数据并不在response中，故在服务器响应后我们需要对response进行处理，得到我们想要的json数据

- status

    http状态码，200表ok 即请求已成功

    201，202都可表成功

    202：服务器接收请求但尚未处理

    205：成功处理请求但没有返回任何内容

    300范围：重定向

    400范围：请求错误 如404

    500范围：服务器错误 如505：服务器不支持

- 保留小数点后两位：.toFixed(2)
