const {add_token} = require('./src/login.js')
const {print_help} = require('./src/help.js')
const {check_args} = require('./src/check_params.js')
const {create_repo} = require('./src/create_repo.js')

const fs = require('fs');

const Red = "\033[0;31m"
const Green = "\033[0;32m"
const Blue = "\033[0;34m"
const data = "./data.json"
const template = "create_repo.json"
let info;
let token;

try {
    token = JSON.parse(fs.readFileSync(data, 'utf8'));
} catch (e) {
    token = {
        token:""
    };
    fs.writeFileSync(data, JSON.stringify(token));
}

try {
    info = JSON.parse(fs.readFileSync(template, 'utf8'));
} catch (e) {
    info = {
        name:"template",
        description:null,
        private:false
    };
    fs.writeFileSync(template, JSON.stringify(info))
}

function main() {
    if (process.argv[2] === null)
        return (console.log(Red, "Error do '-h' to see help"));
    if (process.argv[2] === "-h")
        return(print_help());
    if (add_token() == false)
        return (console.log(Red, "\nBad token\n"));
    if (token.token == null)
        return(console.log(Red, "\nYou don't have token add it with flags --token\n"));
    for(let i = 0; process.argv[i]; i++) {
        check_args(process.argv, i, info)
    }
    create_repo(info)
}

main()