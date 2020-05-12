const express=require('express');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');

mongoose.Promise=global.Promise;

const app=express();
const port=3000;
const databaseURL = 'mongodb://localhost:27017/blog';

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

mongoose.connect(databaseURL, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }, function () { }).then(() => {
    console.log("successfully connected to database...");
}).catch(err => {
    console.error("error connecting database", err.stack);
    process.exit(1);
});

app.listen(port, () => {
    console.log("server is running on port " + port);
})
