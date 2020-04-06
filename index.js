const express = require('express');
//var router = express.Router();

// router.get('/', (req, res) => {
//     res.render("index.html");
//});


// router.get('/', (req, res)=> {
//     res.render('index', {
//         data: {},
//         errors: {}
//     });

// });


//upload image post
// router.post('/', upload.single('image'), async function (res, req){
// await console.log('post');
// const imagePath = path.join(__dirname, './images');
// const fileUpload = new Resize(imagePath);
// if(!req.file) {
//     res.statusCode(401).json({error: 'please image an image'});
// }
// const filename = await fileUpload.save(req.file.buffer);
// return res.statusCode(200).json({name: filename});
// });


//  router.post('/',(req, res)=>{
//   res.render('index', {
//       data: req.body,
//       errors:{
//           name: {
//               msg: "name required"
//           },
//           age: {
//               msg: "age must be of number"
//           }
         
//       }
//  });
//   const data = matchedData(req);
//   console.log('Sanitized:', data);
// });
//module.exports = router;