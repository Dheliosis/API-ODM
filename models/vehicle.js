const mongoose = require( 'mongoose')

const Vehicle = mongoose.model( 'Vehicle', {
    
    vehicle_class: {
        type: String
    },
    pilots: {
        type: Array
    }
})

module.exports = { Vehicle }