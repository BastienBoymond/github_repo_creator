const fs = require('fs');
const axios = require('axios')

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

function create_repo(info) 
{

}

module.exports = {create_repo}