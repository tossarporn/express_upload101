const express = require('express');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req,file,cb){
        cb(null, 'uploads')
    },
    filename: function(req,file,cb){
        // const uniqueSuffix = Date.now() + '-' + Math.round(Math.random());
        const fileName = `${Date.now()}-${file.originalname}`//originalname อัปโหลดไฟล์ไหนใช้ชื่อไฟล์นั้น
        cb(null,fileName)
    }
})

const upload = multer({storage});
const cors = require('cors');

const app = express();
app.use(cors());
let port = 8000;



app.post('/upload',upload.single('test'),(req,res)=>{
    res.json({message: 'hello world'})
})

app.listen(port,()=>{
    console.log(`Server run at port http://localhost:${port}`);
})