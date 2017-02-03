# snh48商城抢票软件

---

1、运行环境：node7.5以上版本。
```
node --harmony start.js
```

2、运行脚本前需要现在浏览器上获取账号的Cookie。（暂未做登录和验证码识别）。

3、options.js为配置文件，其中：
  * id：票务id。
  * num：购买票的数量。
  * seattype：票的类别。2，VIP坐票；3，普通坐票；4，普通站票。
  * brand_id：剧场类型。1，SNH48；2，BEJ48；3，GNZ48；4，SHY48
  * raceNumber：抢票次数
  * times：抢票间隔时间（ms）
  * cookie: cookie

4、返回结果
> {"HasError":true,"ErrorCode":"144008","Message":"由于您购买本商品的订单过期或取消已超过1次，\u003cbr/\u003e本商品24小时内无法购买","ReturnObject":null}

这种表示订单有问题。其中HasError表示有错误，ErrorCode表示错误代码，Message表示错误原因，ReturnObject表示抢到票后的订单号。

> {"HasError":false,"ErrorCode":"","Message":"success","ReturnObject":"/TOrder/Item/170203-2-100059"}

这种表示抢到票。
