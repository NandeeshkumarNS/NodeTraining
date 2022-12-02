const product = require("./products.model")


const findById = async (id) => {
    return await product.remove(id)
}


const find = async () => {
    return await product.find()
}

const save = async (createDetails) => {
    let createDe = await product.create( createDetails )
    return createDe;
}

const savemany = async (createDetails) => {
    let createDe = await product.insertMany({ createDetails })
    return createDe;
}

const findByName = async (name) => {
    console.log(name)
    return await product.findOne({name:name})
}

module.exports={
    findById,
    find,
    save,
    savemany,
    findByName
}