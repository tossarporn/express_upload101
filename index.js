const express = require('express');
const multer = require('multer');
const cors = require('cors');

const upload = multer({dest: 'uploads/'});
const app = express();

app.use(cors());
let port = 8000;

app.post('/upload',upload.single('test'),(req,res)=>{
    res.json({message: 'hello world'})
})

app.listen(port,()=>{
    console.log(`Server run at port http://localhost:${port}`);
})