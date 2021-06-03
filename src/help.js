
const Red = "\033[0;31m"
const Green = "\033[0;32m"
const Blue = "\033[0;34m"

function print_help() 
{
    console.log(Blue,`Usage; node github_creator.js [options]`);
    console.log(Green,`\t--token [TOKEN]\t\tlog you with a github token`);
    console.log(Green, `\t--private\t\tput the Repository in private`);
}


module.exports = {print_help}