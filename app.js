const os=require('os');

let totalMem = os.totalmem();
let freeMem  = os.freemem();

// console.log('Total Memory:'+ totalMem);

console.log(`Total Memory ${totalMem}`);
console.log(`Free Memory ${freeMem}`);

