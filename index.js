//1. npm init
//2. npm i express
//3. npm install ejs
//4. npm i body-parser (to fetch name)
// in package.json type:module

import express from 'express';
import bodyParser from 'body-parser';
import ejs from 'ejs';
const app = express();
const port = 3000;

//to use body parser
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render("index.ejs");        //currently we r not sending data   
})

app.post('/submit',function(req,res){
    // console.log(req.body.fname.length);
    // console.log(req.body.lname.length);
    const fnameLength=req.body.fname.length;
    const lnameLength=req.body.lname.length;
    res.render("index.ejs",{
        countLetters:fnameLength+lnameLength
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})