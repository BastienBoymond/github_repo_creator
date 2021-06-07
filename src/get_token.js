const fs = require('fs');

const data = "../data.json"

function get_token() {
    let token;
    try {
        token = JSON.parse(fs.readFileSync(data, 'utf8'));
    } catch (e) {
        token = {
            token:""
        };
        fs.writeFileSync(data, JSON.stringify(token));
    }
    return(token);
}

module.exports = {get_token}