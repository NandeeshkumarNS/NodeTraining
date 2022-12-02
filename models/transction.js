const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const transction = Schema(
    {
        Date: {
            type: String,
        },
        From: {
            type: Number,
        },
        To: {
            type: Number,
        },
        Amount: {
            type: Number,
        }
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("transction", transction, "transction");