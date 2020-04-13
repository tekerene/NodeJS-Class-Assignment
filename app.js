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
var createBackup = require('./backup/backup');
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

        let stuData = [];
    // REGISTER STUDENT
    
    
        //console.log(geStu.toString());
        app.get('/reg', (req, res)=> {
            let stName = req.body.name;
            let geStu = fs.readFile('student.txt', 'utf8', (err, data)=>{
        if(err){
            throw err;

        } else  {
            res.end(geStu);
            console.log(data);
        }
            });
         
           
            console.log(stName);
        });
        var stuList = [];
        eventEmitter.emit("register", 'student.txt');
        app.post('/register',  (req, res) => {
    // register form
            
       let stName = req.body.firstName;
        let stAge = req.body.age;
        let stClass = req.body.class;
        let stSpeciality = req.body.speciality;
        let stAddress = req.body.address;
        let stImage = req.body.filename;
       
        let studentInfo = fs.writeFileSync(stName+".txt", ` Student Info: NAME: ${stName}, AGE: ${stAge}, CLASS: ${stClass}, Speciality: ${stSpeciality}, Address: ${stAddress}, IMAGE: ${stImage}`);
        console.log(`Student Info:  NAME: ${stName}, AGE: ${stAge}, CLASS: ${stClass}, Speciality: ${stSpeciality}, Address: ${stAddress}, IMAGE: ${stImage}`);
            stuList.push(studentInfo);
     //BACKING UP THE STUDENT FILE FROM BACKUP.JS

        console.log('student file successfully backup');

          
         

        // OUTPUTTING THE STUDENT DATA BACT TO THE BROSWER
         res.send( `<p>new student created </p>
         <h1>Student Info:</h1>
         <table>
         <thead>
         <tr>
         <th>Student's Name</th>
         <th>Student's Age</th>
         <th>Student'sClass</>
         <th>Speciality</>
         <th>Address</>
         <th>Picture ID</th>
         <th></th>
         <th></th>
         </tr>
         </thead>
         <tbody>
         <tr>
         <td>${stName}</td>
         <td>${stAge}</td>
         <td>${stClass}</td>
         <td>${stSpeciality}</td>
         <td>${stAddress}</td>
         <td>${stImage}</td>
         </tr>
         </tbody>
         </table>
         `);
       });
       
            let readStudent = fs.createReadStream('student.txt', 'utf8');
            readStudent.on("data", (data)=>{
              });
              
    //TRYING TO USE THE LOG FILE

             app.post('/log', (data, err)=>{
              if(req.body){
            console.log('log fail');
            
            } else {
            res.end(`studentc${stName} created`);
            }
        });
       
 //IMAGE Upload
        app.get("/upload-image", (req, res)=>{
        res.send(__dirname+"/public/images");
        });

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
         //var form = new formidable.IncomingForm();
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
   
   