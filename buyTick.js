const nodegrass = require('nodegrass');
const options = require('./options.js');

const href = 'https://shop.48.cn/TOrder/add'; // 买票的地址
let set = null;                               // 定时器

/**
 *  进行一次抢票
 *  @param {object} postHeaders : 请求头
 *  @param {object} postData    : 请求参数
 *  @param resolve
 */
function post(postHeaders, postData, resolve){
    nodegrass.post(href, (data, status, headers)=>{
        const j = JSON.parse(data, null, 4);
        if(j.HasError){
            // 有错误
        }else{
            console.log(data);
            clearInterval(set);
            resolve(j);
        }
    }, postHeaders, postData);
}

/**
 * 买票
 * @param {number} id          : 票务id
 * @param {string} cookie      : cookie
 * @param {number} brand_id    : 剧场类型。1，SNH48；2，BEJ48；3，GNZ48；4，SHY48
 * @param {number} seattype    : 票的类型。2，VIP坐票；3，普通坐票；4，普通站票
 * @param {number} num         : 票的数量
 */
function buyTick(id, cookie, brand_id = 1, seattype = 3, num = 1){
    // 请求参数
    const postData = {
        'id': id,
        'num': num,
        'seattype': seattype,
        'brand_id': brand_id,
        'r': Math.random()    // 随机数
    };

    // 请求头
    const postHeaders = {
        'Accept': 'application/json, text/javascript, */*; q=0.01',
        'Host': 'shop.48.cn',
        'Origin': 'https://shop.48.cn/tickets/item/' + id,
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'X-Requested-With': 'XMLHttpRequest',
        'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 Safari/537.36',
        'Cookie': cookie
    };

    return new Promise((resolve, reject)=>{
        set = setTimeout(()=>{
            post(postHeaders, postData, resolve);
        }, options['times']);
    });
}

module.exports = buyTick;

