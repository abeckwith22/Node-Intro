const fs = require('fs');
const axios = require('axios').default;
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

function webCat(URL){
    return axios.get(URL).then(function (response){
        console.log(response);
    })
}

// cat(argv[2]);
webCat(argv[2]);