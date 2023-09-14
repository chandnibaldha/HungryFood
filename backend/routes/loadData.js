const express = require("express");
const itemSchema = require("../schema/item");
const catogorySchema = require("../schema/category");
const router = express.Router();

router.post("/getdata",async(req,res)=>{
    try {
        const foodCatagory=await catogorySchema.find()
        // console.log("cat ",foodCatagory)
        const foodItem=await itemSchema.find()
        // console.log("cat ",foodItem)
        res.send([foodItem,foodCatagory])
    } catch (error) {
        res.send(error.massage)
    }
})

module.exports = router