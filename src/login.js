const {get_token} = require('./get_token.js')

const axios = require('axios');
const fs = require('fs');


const Red = "\033[0;31m"
const Green = "\033[0;32m"
const Blue = "\033[0;34m"

let token = get_token();

function add_token() {
    for (let i = 0; process.argv[i]; i++) {
        if (process.argv[i] == "--token" && process.argv[i + 1] != null) {
            axios.get(`https://api.github.com/user`, {headers: {'Authorization': `token ${process.argv[i + 1]}`}}).then(response => {
                if (response.data) {
                    token.token = process.argv[i + 1]
                    fs.writeFileSync(data, JSON.stringify(token));
                    return (console.log(Green, "\nToken add or modified\n"));
                }
            });
        } else if (process.argv[i] == "--token" && process.argv[i + 1] == null) {
            return(console.log(Red, "\nNot enough argument\n"));
        }
    }
    return (true);
}

module.exports = {add_token}