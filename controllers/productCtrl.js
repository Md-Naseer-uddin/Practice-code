const productModel = require("../models/productModel")
const { resObjGenerator } = require("../utils/utils")

const getProducts = async (req, res) => {
    const products = await productModel.find()
    res.status(200).json(products)
}

const getProduct = async (req, res) => {
    let id = req.params.id
    const products = await productModel.find()
    let product
    for (const val of products) {
        if(val._id==id){
            product=val
        }        
    }

    if (product){
        res.status(200).json(product)
    }
    else{
        res.status(404).json("Product not found")
    }
}

const addProduct = async (req, res) => {
    try {
        const data = req.body
        const product = new productModel(data)
        await product.save()
        let obj = resObjGenerator(true, "Product Added Successfully", product)
        res.status(201).json(obj)
    }
    catch (err) {
        let obj = resObjGenerator(false)
        res.status(500).json(obj)
    }
}

const patchProduct = async (req, res) => {
    try {
        const pid = req.params.id
        const data = req.body
        const product = await productModel.findOneAndUpdate({ _id: pid }, data, { new: true })
        let obj = resObjGenerator(true, "Product Updated Successfully", product)
        res.status(200).json(obj)
    } catch (err) {
        let obj = resObjGenerator(false)
        res.status(500).json(obj)
    }
}

const putProduct = async (req, res) => {
    try {
        const pid = req.params.id
        const data = req.body
        const product = await productModel.updateOne(
            { _id: pid },
            {
                $set: {
                    name: data.name,
                    price: data.price,
                    category: data.category,
                    inStock: data.inStock,
                    discountType: data.discountType,
                    discount: data.discount

                },
            },
            { new: true }
        )
        let obj = resObjGenerator(true, "Product Updated Successfully", product)
        res.status(200).json(obj)
    } catch (err) {
        let obj = resObjGenerator(false)
        res.status(500).json(obj)
    }

}

const deleteProduct = async (req, res) => {
    try {
        let productId = req.params.id;
        await productModel.deleteOne({ _id: productId });
        let resObj = resObjGenerator(true, "Product Deleted Successfully!");
        res.status(200).json(resObj);
    } catch (e) {
        let resObj = resObjGenerator(false);
        res.status(500).json(resObj);
    }
};

module.exports = {
    getProducts,
    getProduct,
    addProduct,
    putProduct,
    patchProduct,
    deleteProduct
}
