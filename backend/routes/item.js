const express = require("express");
const itemSchema = require("../schema/item");
const catogorySchema = require("../schema/category");
const router = express.Router();

router.post("/additem", async (req, res) => {
  try {
    const catagoryMetch = await catogorySchema.findOne({
      CategoryName: req.body.categoryName,
    });
    // console.log("cat ", catagoryMetch)
    const itemMetch = await itemSchema.findOne({
      name: req.body.name,
    });
    // console.log("item ", itemMetch)
    if(!itemMetch){
    if (!catagoryMetch) {
      await catogorySchema.create({
        CategoryName: req.body.categoryName,
      });
    }
    if(!itemMetch){
      await itemSchema.create({
        CategoryName: req.body.categoryName,
        name: req.body.name,
        img: req.body.foodImg,
        description: req.body.description,
        options: req.body.options,
        restaurant:req.body.restaurant,
        location:req.body.location
      });}
      res.json({ success: true, msg: "added" });
    }else{
      res.json({ success: false });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false });
  }
});

module.exports = router;
