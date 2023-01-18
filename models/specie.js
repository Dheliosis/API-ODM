const mongoose = require( 'mongoose')

const Specie = mongoose.model( 'Specie', {

    edited: {
        type: String
    },
    classification: {
        type: String
    },
    name: {
        type: String
    },
    designation: {
        type: String
    },
    created: {
        type: String
    },
    eye_colors: {
        type: String
    },
    
    people: {
        type: Array
    },
    skin_colors: {
        type: String
    },
    language: {
        type: String
    },
    hair_colors: {
        type: String
    },
    homeworld: {
        type: String
    },
    average_lifespan: {
        type: String
    },
    average_height: {
        type: String
    },
})

module.exports = { Specie }