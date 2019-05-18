const mongoose = require('mongoose')
const Schema = mongoose.Schema

const imgSrcSchema = new Schema({
    source: {
        type: String,
        required: [true, 'Source field is required.']
    },
    tag: {
        type: String,
        required: [true, 'Tag field is required.']
    }
})
const ImgSrc = mongoose.model('imgSrc', imgSrcSchema)

module.exports = ImgSrc
