const transcModel = require("../models/transction")
const mongoose = require("mongoose");

const transactions = [
    {
    "Date": "12-01-2022",
    "From": 1001,
    "To": 1003,
    "Amount": 15000
    },
    {
    "Date": "12-01-2022",
    "From": 1003,
    "To": 1002,
    "Amount": 12000
    },
    {
    "Date": "12-01-2022",
    "From": 1002,
    "To": 1005,
    "Amount": 2000
    },
    {
    "Date": "13-01-2022",
    "From": 1003,
    "To": 1001,
    "Amount": 1000
    },
    {
    "Date": "13-01-2022",
    "From": 1002,
    "To": 1001,
    "Amount": 1200
    },
    {
    "Date": "14-01-2022",
    "From": 1001,
    "To": 1002,
    "Amount": 3000
    },
    {
    "Date": "14-01-2022",
    "From": 1005,
    "To": 1003,
    "Amount": 1500
    },
    {
    "Date": "15-01-2022",
    "From": 1005,
    "To": 1003,
    "Amount": 4000
    }
    ]

exports.Create = async(req,res,next) =>{
    try {

        let create = await transcModel.create({transaction:transactions})
console.log("DDDDDDDDDD")
        return create
        
    } catch (error) {
        console.log(error)
        return false
    }
}