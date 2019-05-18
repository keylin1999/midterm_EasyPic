const mongoose = require('mongoose')
const Schema = mongoose.Schema

const imgTagsSchema = new Schema({
    tagName: {
        type: String,
        required: [true, 'TagName field is required.']
    }
})
const ImgTags = mongoose.model('imgTags', imgTagsSchema)

module.exports = ImgTags