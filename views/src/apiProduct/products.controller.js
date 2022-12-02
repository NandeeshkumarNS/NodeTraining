const productService = require("./products.service")

const findById = async (req,res,next) =>{
    try {

        const product = await productService.findById(req.body.productId)
        res.json({status:"Success",data:product})
        
    } catch (error) {
        return error
    }
}


const find = async (req,res,next) =>{
    try {
        const product = await productService.find()
        res.json({status:"Success",data:product}) 
    } catch (error) {
        return error
    }
}

const save = async (req,res,next) =>{
    try {
        const createDetails = req.body
        const product = await productService.save(createDetails)
        res.json({status:"Success",data:{productInput:product}}) 
    } catch (error) {
        return error
    }
}


const saveMany = async (req,res,next) =>{
    try {
        const createDetails = req.body

        const product = await productService.savemany(createDetails)
        res.json({status:"Success",data:{productInput:product}}) 
    } catch (error) {
        return error
    }
}

const findbyName = async (req,res,next) =>{
    try {
        const product = await productService.findByName(req.query.name)
        res.json({status:"Success",data:product}) 
    } catch (error) {
        return error
    }
}

module.exports={
    findById,
    find,
    save,
    saveMany,
    findbyName
}