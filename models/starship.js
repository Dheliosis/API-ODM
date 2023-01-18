const mongoose = require( 'mongoose')

const Starship = mongoose.model( 'Starship', {
    pilots: {
        type: Array
    },
    MGLT: {
        type: String
    },
    starship_class: {
        type: String
    },
    hyperdrive_rating: {
        type: String
    }

})

module.exports = { Starship }