const fs = require('fs');
const {get_token} = require('./get_token.js')

let token = get_token();

function change_desc(desc, info) 
{
    if (desc != null)
        info.description = desc;
    return (info);
}

module.exports = {change_desc}