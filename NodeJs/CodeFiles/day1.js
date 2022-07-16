
/****   Hello World ****/

const hello = "Hello World";
console.log(hello);
//Run using -> node <filename.js>

////////////////////////////////////////////////////////////////////////////////

/**** Importing Modules ****/

const fs = require('fs');

//Reading from file Synchronously, Blocking way.
//const data = fs.readFileSync('../abc.txt','utf-8');
//console.log(data); //prints data on the console.

//Writing to file Synchronously , Blocking way.
const dataOut = "This text should be written to file";
//const dataOut = `This text should be mixed with ${data} and ${Date.now()}`;  //Use of backticks to format text with other js variables and Js inbuilt function return values

fs.writeFileSync('./output.txt',dataOut);
console.log('File is written');

            /////////////////////////////////////////////             

//Reading from file Asynchronously, Non-Blocking way.
fs.readFile("\\Users\\manji\\Desktop\\dummy.txt","utf-8",(err,myData)=>{ 	//This weird thing is callback function 
console.log(`${myData} 😁`);
});
console.log("This should be read at last"); // This gets printed before the above line becoz of Asynchronous

	//Just another example of asyc reading of file - here reading a file, which contains name of another file and then we are reading that 2nd file too
fs.readFile("\\Users\\manji\\Desktop\\iHaveAFileName.txt","utf-8",(err,myData)=>{ 	
	fs.readFile(`\\Users\\manji\\Desktop\\${myData}.txt`,"utf-8",(err,myData2)=>{
		console.log(`File name was: ${myData}📌  \nData in that file was:\n \t ${myData2}`);
	});
});
console.log("This should be read at last"); // This gets printed before the above line becoz of Asynchronous

//Writing to file Aynchronously, Non-Blocking way
const inputData = "I am learning NodeJs";
fs.writeFile("\\Users\\manji\\Desktop\\nodeDummy.txt",inputData,"utf-8",(err) => {
	console.log("Written into file asynchronously.!");
});

////////////////////////////////////////////////////////////////////////////////

/**** Importing Modules ****/








