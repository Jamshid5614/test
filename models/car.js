const {Schema,model} = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');



const carSchema = new Schema({
    model: String,
    price: Number
});

carSchema.plugin(mongoosePaginate);


const Car = model('cars',carSchema);



module.exports = Car;

