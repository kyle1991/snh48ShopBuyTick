/* 商城客户端抢票 */

$(()=>{
    const id = tickets_id;                            // 票务id
    const seattype = $('#seat_type').val();         // 2：vip坐票，3：普通坐票，4：普通站票，可以自行修改成数字
    const url = 'https://shop.48.cn/TOrder/add'; // 48商城地址
    const num=$('#num').val();                       // 购票的数量，可以自行修改成数字
    const brand_id = 2;                               // 1：SNH48，2：BEJ48，3：GNZ48，4：SHY48
    const raceNumber = 1;                             // 抢票的次数
    let set = null;                                   // 定时器

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
            success: (result)=>{
                if(result.HasError){ // 没错误，表示抢票成功
                    set = setTimeout(buyTick, 2000);
                }else{
                    console.log('抢票可能成功');
                    console.log(result);
                    clearTimeout(set);
                }
            }
        });
    }
    buyTick();
});
