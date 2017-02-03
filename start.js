const buyTick = require('./buyTick.js');
const options = require('./options.js');

/* start */
async function start(){
    const _1 = await buyTick(options['id'], options['brand_id'], options['seattype'], options['num']);
    console.log(_1);
}
start();
