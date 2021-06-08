const {get_token} = require('./get_token.js')

const fs = require('fs');

let token = get_token();

function change_name(name, info)
{
    if (name != null)
        info.name = name;
    return (info);
}

module.exports = {change_name}