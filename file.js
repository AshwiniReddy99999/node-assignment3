const fs=require("fs")
var http=require('http')
const readline=require("readline")
const { fileURLToPath } = require("url")
const { createInflate } = require("zlib")

const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
rl.question("Please Enter Your name",(name)=>{
    console.log("Hello ",name);
    rl.close();
    createfile(name)
})

function createfile(name){
    const myFileWriter = async (fileName, fileContent) => {
        await fs.writeFile(fileName,fileContent,(err) => {
            console.log(err);
        })
    }
    myFileWriter('index.html',`<h1>Hello world</h1>\n<p>This is ${name}</p>`)
}

http.createServer(function(res,res){
    fs.readFile('index.html',function(err,data){
        res.writeHead(200,{'content':'text/html'});
        res.write(data)
        res.end()
    })
}).listen(5000)