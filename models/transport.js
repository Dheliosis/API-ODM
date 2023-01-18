const mongoose = require( 'mongoose')

const Transport = mongoose.model( 'Transport', {
    edited: {
        type: Date,
        default: Date.now
    },
    consumables :{
        type: String
    },
    name :{
        type: String
    },
    created: {
        type: Date,
        default: Date.now
    },
    cargo_capacity :{
        type: Number
    },
    passengers :{
        type: Number
    },
    max_atmosphering_speed :{
        type: Number
    },
    crew :{
        type: Number
    },
    length :{
        type: Number
    },
    model :{
        type: String
    },
    cost_in_credits :{
        type: Number
    },
    manufacturer :{
        type: String
    },
})

module.exports = { Transport }