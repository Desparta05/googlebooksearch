const moongoose =require("mongoose")
const Schema= moongoose.Schema
const bookSchema= new Schema({
title:{
    type: String,
    require: true,

},
authors:{
    type: String,
    require: true
},
description:{
    type: String,
    require: false
},
image: {
    type: String,
    require: false
},
link: {
    type: String,
    require: false
}


})

const Book= mongoose.model("Book", bookSchema)
module.exports = Book
// title - Title of the book from the Google Books API

// authors - The books's author(s) as returned from the Google Books API

// description - The book's description as returned from the Google Books API

// image - The Book's thumbnail image as returned from the Google Books API

// link - The Book's information link as returned from the Google Books API