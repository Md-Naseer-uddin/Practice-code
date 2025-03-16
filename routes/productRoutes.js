const express = require("express")
const productCtrl = require("../controllers/productCtrl")

const router = express.Router()

router.get("/", productCtrl.getProducts)
router.get("/:id", productCtrl.getProduct)
router.put("/updateProduct", productCtrl.putProduct)
router.patch("/updateProduct", productCtrl.patchProduct)
router.post("/addProduct", productCtrl.putProduct)
router.delete("/deleteProduct", productCtrl.deleteProduct)

module.exports=router