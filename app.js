var express = require('express');
var formidable = require('formidable');
var app = express();
const bodyParser = require('body-parser');
//const router = require('./index');
const fs = require('fs');
const filePath = "student.txt";
var http = require('http');
var eventEmitter = require('./events');
var upload = require("express-fileupload");
//var router = express.Router();
app.use(express.static('./public'));
app.use(upload());

 
    // READING THE STUDENT TEXT FILE(Assyn)

        fs.readFile(filePath, 'utf8', (err, data)=> {
            if(err) {
                console.log(err.message);
        } else {
           // console.log(data);
            }
        });
        app.set('view engine', 'ejs');
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({entended: false}));

    // REGISTER STUDENT
        eventEmitter.emit("register", "student.txt");
        app.post('/register',  (req, res) => {
    // register form
      
        let stName = req.body.firstName;
        let stAge = req.body.age;
        let stClass = req.body.class;
        let studentInfo = fs.writeFileSync(filePath, ` Student Info: NAME: ${stName} AGE: ${stAge} CLASS: ${stClass}`);
        console.log(`Student ""Info: NAME: ${stName} AGE: ${stAge} CLASS: ${stClass}`)
       res.end(`new student created
       Student Info:
       { NAME: ${stName} AGE: ${stAge} CLASS: ${stClass}}`);
        });

            let readStudent = fs.createReadStream('student.txt', 'utf8');
            readStudent.on("data", (data)=>{
            console.log(data);
            });
    
       
 //File Upload
 app.get("/upload-image", (req, res)=>{
     res.sentFile(__dirname+"/public/index.html");
 })
 app.post('/upload-image',  (req, res) => {
     if(req.files){
         var file = req.files.filename,
         filename = file.name;
         file.mv("../images/"+filename,function(err){
             if(err){
                 console.log(err)
                 res.send("error occured");
             } 
             else{
                 res.send('uploaded successfully');
             }
         })
     }
        // var form = new formidable.IncomingForm();
        // form.parse(req, function (err, field, files) {
        //     res.write('file uploaded');
        //     res.end();
        });
        // form.on('fileBegin', 
        // function(name, file){
        //     file.path = __dirname + '/uploads/' + file.name;
        // });
        // form.on('file', function(name, file){
        //     console.log('Uploaded' + file.name);
        // });
        //    // res.sendFile(__dirname + '/index.html');
        // });

 //BUFFER
        var sender = new Buffer("Teke Rene");
        var buf2 = new Buffer(`new student created by: ${sender}`);
        
        console.log("buffer content:", buf2.toString());

 // LISTENING TO SERVER
        app.listen(3000, ()=> {
            console.log("App running at port 3000")
        });
   
   