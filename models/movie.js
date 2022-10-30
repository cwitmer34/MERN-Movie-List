const mongoose = require('mongoose')
const { Schema } = mongoose


const movieSchema = new Schema ({
    title: { type: String, required: true },
    image: { type: String, default: 'http://placekitten.com/350/350' },
    date_released: { type: Number },
    duration: { type: Number },
    genre: { type: String },
    description: {type: String, required: true },
    tagline: { type: String },

})


module.exports = mongoose.model('Movie', movieSchema)

