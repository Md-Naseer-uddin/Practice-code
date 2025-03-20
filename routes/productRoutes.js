const express = require("express")
const productCtrl = require("../controllers/productCtrl")

const router = express.Router()

router.get("/", productCtrl.getProducts)
router.get("/:id", productCtrl.getProduct)
router.put("/updateProduct/:id", productCtrl.putProduct)
router.patch("/updateProduct/:id", productCtrl.patchProduct)
router.post("/addProduct", productCtrl.addProduct)
router.delete("/deleteProduct", productCtrl.deleteProduct)

module.exports=router