
/****   Hello World ****/

const hello = "Hello World";
console.log(hello);
//Run using -> node <filename.js>

////////////////////////////////////////////////////////////////////////////////

/**** Importing Modules ****/

const fs = require('fs');

const data = fs.readFileSync('../abc.txt','utf-8');
console.log(data); //prints data on the console.

//Writing to file
const dataOut = "This text should be written to file";
//const dataOut = `This text should be mixed with ${data} and ${Date.now()}`;  //Use of backticks to format text with other js variables and Js inbuilt function return values

fs.writeFileSync('./output.txt',dataOut);
console.log('File is written');


////////////////////////////////////////////////////////////////////////////////










