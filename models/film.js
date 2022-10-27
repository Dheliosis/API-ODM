const mongoose = require( 'mongoose')

const Film = mongoose.model( 'Film', {

    starships: {
        type: Array
    },
    created: {
        type: String,
        default: Date.now
    },
    edited: {
        type: String,
        default: Date.now
    },
    vehicles: {
        type: Array
    },
    
    planets: {
        type: Array
    },
    producer: {
        type: String
    },
    title: {
        type: String
    },
  
    episode_id: {
        type: Number
    },
    director: {
        type: String
    },
    release_date: {
        type: String
    },
    opening_crawl: {
        type: String
    },
    characters: {
        type: Array
    },
    species: {
        type: Array
    },
})

module.exports = { Film }