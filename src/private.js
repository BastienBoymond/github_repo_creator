const {get_token} = require('./get_token.js')

const fs = require('fs');

let token = get_token();

function set_private(info)
{
    info.private = !info.private;
    return (info);
}

module.exports = {set_private}