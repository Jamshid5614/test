const Car = require('../models/car');

const options = {
    page: 2,
    limit: 2
}

exports.fetchAllCars = async (req,res) => {
    try {
        const cars = await Car.paginate({},options);
        res.json(cars);
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}

exports.createNewCar = async (req,res) => {
    const {model} = req.body;

    try {
        const newCar = await Car.create({model});
        // const newCar = await Car.create({model});
        res.json(newCar);
        console.log(newCar)
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}

exports.deleteAll = async (req,res) => {
    Car.deleteMany({})
       .then(res => console.log(res))
       .catch(err => console.log(err))
};








