const express=require("express")

const bookRoutes=require("./bookRoutes")

const router=express.Router()

router.use("/books",bookRoutes)

module.exports=router