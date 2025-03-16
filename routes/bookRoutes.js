const express = require("express")

const bookCtrl = require("../controllers/bookCtrl")

const router = express.Router()


router.get("/", bookCtrl.getBooks)
router.get("/:id", bookCtrl.getBook)
router.post("/addBook", bookCtrl.createBook)
router.put("/putUpdate/:id", bookCtrl.putUpdate)
router.patch("/patchUpdate/:id", bookCtrl.patchUpdate)
router.delete("/delete/:id", bookCtrl.deleteBook)


module.exports = router