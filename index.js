const express = require('express');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req,file,cb){
        //cb(null, 'uploads'=> ชื่อไฟล์ที่ได้สร้างไว้)
        cb(null, 'uploads')// function call back ของ multer
    },
    filename: function(req,file,cb){
        // const uniqueSuffix = Date.now() + '-' + Math.round(Math.random());
        const fileName = `${Date.now()}-${file.originalname}`//originalname อัปโหลดไฟล์ไหนใช้ชื่อไฟล์นั้น
        cb(null,fileName)// function call back ของ multer
    }
})

const upload = multer({
    storage,
    limits:{//กำหนดขนาด size
        fileSize: 1024*1024*2 //แปลงเป็น kg byte * mg byte *2 ขนาไฟล์ไม่ถึง 2 mb //หน่วยเป็น byte
    }
});
const cors = require('cors');

const app = express();
app.use(cors());
let port = 8000;


//ระบุ part,ระบุการเก็บรูปภาพ แบบเดี่ยว หรือ หลายไฟล์ (key ที่รับจาก frontEnd),(req,res)
app.post('/upload',upload.single('test'),(req,res)=>{//ส่งผ่าน key ที่ชื่อ test
    res.json({message: 'hello world'})
})

app.listen(port,()=>{
    console.log(`Server run at port http://localhost:${port}`);
})