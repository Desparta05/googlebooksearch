const bookController=require("../../controllers/bookContoller")
const router = require("express").Router();

router.route("/")
       .get(bookController.find)
       .post(bookController.create)

router.route("/:id")   
       .delete(bookController.delete)    

 