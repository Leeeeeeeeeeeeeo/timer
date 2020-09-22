
let timeOut = function(input){
  for(let i of input){
    if(i > 0 && !isNaN(i)){
  setTimeout(() => {
  process.stdout.write('\x07');
}, i * 1000);
    }
  }
} 

timeOut(process.argv.slice(2))