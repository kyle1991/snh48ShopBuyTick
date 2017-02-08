const tesseract = require('node-tesseract');

tesseract.process('test.png', {
    l: 'snh'
}, (err, text)=>{
    if(err){
        console.log(err);
    }
    console.log(text);
});
