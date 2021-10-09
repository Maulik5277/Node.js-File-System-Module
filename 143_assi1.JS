const fs = require('fs');

//1.Create Directory 
fs.mkdir((__dirname,'dic1'),(err) => {
    if(err){
        console.log(err);
    }
    else{
        console.log("Directory created successfully!.....");
    }    
})

//2.Remove Directory
fs.rmdir((__dirname,'dic1'), (err) => {
    if(err){
        console.log(err);
    }
    else{
        console.log("Directory romoved successfully!.....");
    }    
})

//3.create file and write into it
fs.writeFile("maulik.txt","welcome", function(err, result){
    if(err) {
        console.log(err);
    }
    else {
        console.log("File created successfully!.....");
    }
});

//4.read from the file
fs.readFile("maulik.txt","utf8",function(err, data){
    if(err){
        console.log(err);
    }
    else{
        console.log(data);
    }
})

//5.Append data to file
fs.appendFile('maulik.txt','\nAppended data.....',function (err) {
    if(err){
        console.log(err);
    }
    else {
        console.log("Data appended.....");
    }
})

//6.Update / Replace file with new data
fs.writeFile('maulik.txt',"Hello! How Are You",'utf8',function (err){
    if(err){
        console.log(err);
    }
    else {
        console.log("File replace with new data.....");
    }
})

//7.Rename File
fs.rename('maulik.txt','rathod.txt', (err) => {
    if(err){
        console.log(err);
    }
    else{
        console.log("Renamed File.....");
    }
})

//8.Delete File
fs.unlink("rathod.txt", (err) => {
    if(err){
        console.log(err);
    }
    else{
        console.log("File deleted.....");
    }
})