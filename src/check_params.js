const axios = require('axios');
const fs = require('fs');

const Red = "\033[0;31m"
const Green = "\033[0;32m"
const Blue = "\033[0;34m"
const data = "./data.json"
let token;

try {
    token = JSON.parse(fs.readFileSync(data, 'utf8'));
} catch (e) {
    token = {
        token:""
    };
    fs.writeFileSync(data, JSON.stringify(token));
}

function check_args(args, i)
{
    if (args[i][0] === '-') {
        for (let j = 1; args[i][j]; j++) {
            
        }
    }
}


module.exports = {check_args}