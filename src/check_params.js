const {set_private} = require('./private.js')
const {change_name} = require('./name.js')
const {change_desc} = require('./description.js')
const {get_token} = require('./get_token.js')

const fs = require('fs');
const data = "./data.json"
let token = get_token();

function check_args(args, i, info)
{
    if (args[i] === "--private")
        info = set_private(info);
    if (args[i] === "--name" && args[i + 1] != null)
        info = change_name(args[i + 1], info);
    if (args[i] === "--desc" && args[i + 1] != null)
        info = change_desc(args[i + 1], info)
    return (info);
}

module.exports = {check_args}