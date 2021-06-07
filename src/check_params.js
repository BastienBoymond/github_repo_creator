const {set_private} = require('./private.js')
const {change_name} = require('./name.js')
const {change_desc} = require('./description.js')

const fs = require('fs');
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

function check_args(args, i, info)
{
    if (args[i] === "--private")
        set_private(info);
    if (args[i] === "--name" && args[i + 1] != null)
        change_name(args[i + 1], info);
    if (args[i] === "--desc" && args[i + 1] != null)
        change_desc(args[i + 1], info)
}

module.exports = {check_args}