const express = require("express")
const controller = require("./products.controller")
const router = express.Router()

router.get('/', controller.find)
router.post('/del', controller.findById)
router.post('/save', controller.save)
router.get('/findByName', controller.findbyName)


module.exports=router;