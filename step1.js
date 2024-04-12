const fs = require('fs');
const argv = process.argv;
function cat(file){
    fs.readFile(file, 'utf8', function(err, data){
        if(err){
            console.log(`ERROR: ${err}`);
            process.kill(1);
        }
        console.log(data);
    });
}

cat(argv[2]);