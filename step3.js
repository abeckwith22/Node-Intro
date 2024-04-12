const fs = require('fs');
const axios = require('axios').default;
const argv = process.argv;

function check_for_errors(err){
    if(err){
        console.log(`ERROR: ${err}`);
        process.kill(1);
    }
}

function handleOutput(text, out){
    if (out){
        fs.writeFile(out, text, 'utf8', function(err){
            check_for_errors(err);
        });
    }
    else{
        console.log(text);
    }
}

function cat(path, out){
    fs.readFile(path, 'utf8', function(err, data){
        if(err){
            console.log(`ERROR: ${err}`);
            process.kill(1);
        }
        else{
            handleOutput(data, out)
        }
        console.log(data);
    });
}

function webCat(URL){
    return axios.get(URL).then(function (response){
        console.log(response);
    })
}

let out;
let path;

if(argv[4] == '--out'){
    out = argv[5];
    path = argv[2];
    cat(path, out);
}
else{
    path=argv[2];
    cat(path);
}