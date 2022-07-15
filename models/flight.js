const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const flightSchema = new Schema({
    airline: {
        type: String, 
        enum: ['American', 'Southwest', 'United']
    }, 
    airport: {
        type: String, 
        enum: ['AUS', 'DEN', 'DFW', 'LAX', 'SAN'],
        default: 'DEN'
    },
    flightNo: {
        type: Number, 
        min: 10, 
        max: 9999
    },
    departs: {
        type: Date, 
        default: function() {
            const day = new Date().getDate();
            const month = new Date().getMonth();
            const nextYear =  new Date().getFullYear() + 1;
            return new Date(nextYear, month, day)
        }
    }
});

module.exports = mongoose.model('Flight', flightSchema);