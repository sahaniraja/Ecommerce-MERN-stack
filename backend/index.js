const express = require('express');
const cors = require('cors');
require('./db/config');
const User = require('./db/User');
const Product = require('./db/Product');
const app = express();
const Jwt = require('jsonwebtoken');
const jwtKey = 'mern-ecomm';

app.use(express.json());
app.use(cors());

app.post('/signup', async (req, res) => {
    let user = new User(req.body);
    let result = await user.save();
    result = result.toObject();
    delete result.password;
    Jwt.sign({result},jwtKey,{expiresIn:'1h'},(err,token)=>{
        res.send({result, auth:token}); 
    });
});

app.post('/signin', async (req, res) => {
    if (req.body.email && req.body.password) {
        let user = await User.findOne(req.body).select("-password");
        if (user) {
            Jwt.sign({user},jwtKey,{expiresIn:'1h'},(err,token)=>{
                res.send({user, auth:token}); 
            });
        }
        else {
            res.send({ result: 'No User Found' })
        }
    }
    else {
        res.send({ resut: "No User Found" });
    }
});

app.post('/addproduct', async (req, res) => {
    let product = new Product(req.body);
    let result = await product.save();
    res.send(result);
});

app.get('/showproducts', async (req, res) => {
    let products = await Product.find();

    if (products.length > 0) {
        res.send(products);
    }
    else {
        res.send({ Result: "No Records Found!!!" });
    }

});

app.delete('/delproduct/:id', async (req, res) => {
    const result = await Product.deleteOne({ _id: req.params.id });
    res.send(result);
});

app.get('/updateprd/:id', async (req, res) => {
    let result = await Product.findOne({ _id: req.params.id });
    if (result) {
        res.send(result);
    }
    else {
        res.send({ result: "No Records Found!!!" });
    }
});

//update product using PUT method

app.put('/updateprd/:id', async (req, res) => {

    let result = await Product.updateOne(
        { _id: req.params.id },
        { $set: req.body  }
    )
    res.send(result);

});


//Search products in mongoose
app.get('/searchprd/:key',async(req,res)=>{

    let result = await Product.find({
        '$or':[
             { prdname: { $regex:req.params.key } },
             { company: { $regex:req.params.key } },
             { prdcar: { $regex:req.params.key } }
        ]
    })
    res.send(result);
});

/*
app.get("/",(req,res)=>{
    res.send("Welcome to Nodejs Framework!!!")
});
*/
app.listen(5000);