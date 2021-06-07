const {get_token} = require('./get_token.js')

const fs = require('fs');
const axios = require('axios');

let token = get_token();

function create_repo(info) 
{

}

module.exports = {create_repo}