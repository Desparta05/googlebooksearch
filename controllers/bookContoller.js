const db= require("../models")

const bookController={
    find:(req, res) =>{
        db.Book.find().then(results =>{
            res.json(results)
        })
    },
    create:(req, res) =>{
        db.Book.create(req.body).then(results =>{
            res.json(results)
        })
    },
    delete:(req, res) =>{
        db.Book.delete({_id: req.params.id}).then(results =>{
            res.json(results)
        })
    }
}

module.exports= bookController;