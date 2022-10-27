const mongoose = require( 'mongoose')
 
const People = mongoose.model( 'People', {
    edited: {
        type: Date,
        default: Date.now
    },
    name: {
        type: String
    },
    created: {
        type: Date,
        default: Date.now
    },
    gender: {
        type: String
    },
    skin_color: {
        type: String
    },
    hair_color: {
        type: String
    },
    height: {
        type: String
    },
    eye_color: {
        type: String
    },
    mass: {
        type: String
    },
    homeworld: {
        type: Number
    },
    birth_year: {
        type: String
    },
})

module.exports = { People }