const express = require("express")

const bookRoutes = require("./bookRoutes")
const productRoutes = require("./productRoutes")

const router = express.Router()

router.use("/books", bookRoutes)
router.use("/products", productRoutes)

module.exports = router