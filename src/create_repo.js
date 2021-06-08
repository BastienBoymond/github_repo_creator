const {get_token} = require('./get_token.js')

const fs = require('fs');
const axios = require('axios');

const Green = "\033[0;32m"
let token = get_token();

function create_repo(info) 
{
    console.log(info);
    axios.post('https://api.github.com/user/repos',info, {
        headers: {'Authorization': `token ${token.token}`}
    }).then(response => {
        if (response.data)
            console.log(Green, `\nThe repository ${response.data.name} has been created\n`);
    });
}

module.exports = {create_repo}