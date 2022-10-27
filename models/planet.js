const mongoose = require( 'mongoose')

const Planet = mongoose.model( 'Planet', {

    edited: {
        type: Date,
        default: Date.now
    },
    created: {
        type: Date,
        default: Date.now
    },
    climate: {
        type: String
    },
    surface_water: {
        type: String
    },
    name: {
        type: String
    },
    diameter: {
        type: String
    },
    rotation_period: {
        type: String
    },
    terrain: {
        type: String
    },
    gravity: {
        type: String
    },
    orbital_period: {
        type: String
    },
    population: {
        type: String
    },
})

module.exports = { Planet }