const productModel = require("../models/productModel")
const { resObjGenerator } = require("../utils/utils")

const getProducts=async (req,res)=>{
    const products=await productModel.find()
    console.log(typeof(products))
    res.status(200).json(products)
}

// const getProduct=async (req,res)=>{
//     let id =req.paramz.id
//     const products=await productModel.find()
//     console.log(typeof(products))
// }

module.exports={
    getProducts
}
