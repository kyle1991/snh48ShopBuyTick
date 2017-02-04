/* 商城客户端抢票 */
$(()=>{
    const id = 668;                                 // 票务id
    const seattype = 2;                             // 2：vip坐票，3：普通坐票，4：普通站票，可以自行修改成数字
    const url = 'https://shop.48.cn/TOrder/add';    // 48商城地址
    const num = 1;                                  // 购票的数量，可以自行修改成数字
    const brand_id = 2;                             // 1：SNH48，2：BEJ48，3：GNZ48，4：SHY48
    const times = 200;                              // ajax间隔时间（ms）
    let set = null;                                 // 定时器

    function buyTick(){
        $.ajax({
            url: url,
            type: 'post',
            async: true,
            dataType: 'json',
            data: {
                id: id,
                num: num,
                seattype: seattype,
                brand_id: brand_id,
                r: Math.random()
            },
            success: (result)=>{   // 有错误，继续抢
                if(result.HasError){ 
                    // set = setTimeout(buyTick, times);
                }else{            // 没错误，表示抢票成功
                    console.log('抢票可能成功');
                    console.log(result);
                    clearInterval(set);
                }
            }
        });
    }
    set = setInterval(buyTick, times);
});
