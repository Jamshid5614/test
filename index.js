const mongoose = require('mongoose');
const express = require('express');
const app = express();
const carRoutes = require('./routes/car');
const PORT = process.env.PORT || 3001;
const morgan = require('morgan');
const helmet = require('helmet');
const chalk = require('chalk');
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./configs/swagger_output.json');
const Car = require('./models/car');

app.set('view engine','pug');
app.use(express.static('public'))
app.use('/api/docs',swaggerUi.serve,swaggerUi.setup(swaggerFile))
app.use(express.json());
app.use(morgan(function(tokens,req,res){
    return [
        chalk.red(tokens.method(req,res)),
        chalk.green(tokens.status(req,res)),
        chalk.white(tokens.url(req)),
        chalk.green(tokens['response-time'](req,res))
    ]
        .join(' ')
}));
app.use(helmet()); 
app.use('/cars',carRoutes);
app.get('/',async(req,res) => {
    const {price} = await Car.findOne({_id: "6144939daa2887559e77073d"})
    res.render('index.ejs',{price});
});
app.get('/inc-price/:num',(req,res) => {
    const {num} = req.params;
    console.log(typeof num)
    Car.findByIdAndUpdate("6144939daa2887559e77073d",{$inc: {price: Int32Array(['1','2'])}})
        .then(async(data) => {
            const {price} = await Car.findOne({_id: "6144939daa2887559e77073d"})
            console.log(typeof price)
            return res.json({count: price});
        })
        .catch(err => console.log(err))
});
// app.get()




mongoose.connect('mongodb://localhost/cars',{useNewUrlParser: true,useUnifiedTopology: true})
    .then(() => console.log('connected to database'))
    .catch((err) => console.log('Error: ',err))





app.listen(PORT,()=>console.log(`server running on ${PORT}`))