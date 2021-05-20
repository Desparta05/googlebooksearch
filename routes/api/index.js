const bookRoutes= require("./books")
const googleRoutes= require("./googleApi")

const router=require("express").Router();

router.use("/books", bookRoutes);
router.use("/google", googleRoutes);

module.exports= router;