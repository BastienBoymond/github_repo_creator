const Red = "\033[0;31m"
const Green = "\033[0;32m"
const Blue = "\033[0;34m"

function print_help()
{
    console.log("");
    console.log(Blue,`Usage: node github_creator.js [options]`);
    console.log("");
    console.log(Green,`\t--token [TOKEN]\t\tlog you with a github token`);
    console.log(Green,`\t--name [NAME]\t\tset the name of the repository`, Blue, `Défault : "template"`);
    console.log(Green,`\t--desc [DESC]\t\tset the description of the repository`, Blue, `Défault : "Description"`);
    console.log(Green, `\t--private\t\tput the Repository in private`);
    console.log("");
}

module.exports = {print_help}