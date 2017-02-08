/* 图像合并 */
const fs = require('fs');
const spritesmith = require('spritesmith');

const imageFile = (()=>{ // 图片地址
    const f = [];
    for(let i = 1; i <= 60; i++){
        f.push(`image/old (${ i }).png`);
    }
    return f;
})();


/* 合并图片 */
function smImage(imageFile) {
    return new Promise((resolve, reject)=>{
        spritesmith.run({
            src: imageFile,
            padding: 0
        }, (err, result)=>{
            if(err){
                console.log(err);
            }else{
                resolve(result);
            }
        });
    });
}
