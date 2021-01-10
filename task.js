const fs = require("fs");
const { exit } = require("process");
const readline = require("readline");
const la = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
var obj =
{
    name: "NULL",
    address: "NULL",
};
var arr = []
arr.push(obj);
choosen();
function choosen() {
    console.log("1.Add adress\n2.Delete address \n3.View address \n4.Exit ");
    la.question("Enter your choice:", (choice) => {
        switch (choice) {
            case '1':
                aad();
                break;
            case '2':
                daa();
                break;
            case '3':
                vaa();
                break;
            case '4':
                exiting();
                break;
            default:
                console.log("invalid");
                choosen();
                break;
        }
    })
}
function aad() {
    la.question("Enter your address:", (address) => {
        la.question("Enter the name with which you want to save the address:", (nume) => {
            var obj = {
                name: nume,
                address: address,
            };
            arr.push(obj);
            let jsonstring = JSON.stringify(arr);
            fs.writeFileSync("data.json", jsonstring);
            choosen();
        })

    })
}
function daa() {
    let file = fs.readFileSync("data.json");
    let filedata = JSON.parse(file);
    let final = [];
    la.question("Enter the name whose address would you like to delete: ", (nume) => {
        for (let i = 0; i < filedata.length; i++) {
            if (filedata[i].name !== nume) {
                final.push(filedata[i]);
            }
        }
        let jsonstring = JSON.stringify(final);
        fs.writeFileSync("data.json", jsonstring);
        choosen();
    })
}

function vaa() {
    let file = fs.readFileSync("data.json");
    let filedata = JSON.parse(file);
    let final=[];
    for(let i = 1; i < filedata.length; i++){
        final.push(filedata[i]);
    }
    console.table(final);

    choosen();
}
function exiting()
{
    console.log("Thank You!");
}


