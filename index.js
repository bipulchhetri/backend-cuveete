// // Import the http module
// const http = require('http');

// // Define the server
// const server = http.createServer((req, res) => {
//   // Set the response header
//   res.writeHead(200, { 'Content-Type': 'text/plain' });
  
//   // Send response body
//   res.end('Hell, Bipul howjkf are you all ok!\n');
// });

// // Server listens on port 3000
// const port = 4000;
// server.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}/`);
// });



// Reading files with node js (using fs module)

const fs=require("fs")


// read file
// fs.readFile('./files/example.txt', "utf-8",(error,data)=>{
//     if(error)
//     {
//         console.log("file not found please check")
// return;
//     }
//     console.log("file read",data)

// })


// ****** *****
// Write file
const content = "i am writing this file under nodejs all ok ";

fs.writeFile('./files/write.txt',content,(error)=>{
  if(error)
  {
    console.log("file is not written");
    return;
  }
  console.log("file written successfully");
})

// append content into existing file
 const contentToappend="we should practice coding daily"
 fs.appendFile("./files/example.txt",contentToappend,(error)=>{
  if(error){
    console.log("error occurred");
    return;
  }
  console.log("apend successfully");

 })

 //delete a file

 fs.unlink('./files/example.txt',(error)=>{
if(error)
{
  console.log("error occurred");
  return;
}
console.log("file deleted successfully");
 })