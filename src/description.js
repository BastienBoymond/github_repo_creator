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

function change_desc(desc)
{

}

module.exports = {change_desc}