/* 下载验证码 */
const nodegrass = require('nodegrass');

const codeUrl = 'http://user.snh48.com/authcode/code.php'; // 验证码地址

function downloadCode(i){
    return new Promise((resolve, reject)=>{
        nodegrass.getFile(codeUrl, `image/${ i }.png`, (err)=>{
            err ? console.log(err) : resolve();
        });
    });
}

const pall = [];
for(let i = 0; i < 400; i++){
    pall.push(downloadCode(i));
}

Promise.all(pall);
