const fs = require ('fs');
/*
fs.writeFile('message.js' , 'eyyyyyy' , (err) => { 
    if (err) throw err;
    
    console.log ("errrorrrrr");
});
console.log('heyyy');

*/
fs.readFile('./message.txt' , 'utf8' ,(err , data) => {
    if (err) throw err;
    console.log(data);
});