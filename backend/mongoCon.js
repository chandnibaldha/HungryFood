const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
const mongoURI =
  "mongodb://hungryfood:886644chandani@ac-fett8tx-shard-00-00.goknmut.mongodb.net:27017,ac-fett8tx-shard-00-01.goknmut.mongodb.net:27017,ac-fett8tx-shard-00-02.goknmut.mongodb.net:27017/hungryfood?ssl=true&replicaSet=atlas-13gsgg-shard-0&authSource=admin&retryWrites=true&w=majority";

const mongoDB = async () => {
  mongoose.connect(
    mongoURI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    async (err, result) => {
      if (err) {
        console.log("Error ", err);
      } else {
        console.log("BD connected");
        const foodItemColl = mongoose.connection.db.collection("food_items");
        foodItemColl.find({}).toArray(async (err1, data) => {
          const foodCategoryColl =
            mongoose.connection.db.collection("food_categories");
          foodCategoryColl.find({}).toArray((err2, catData) => {
            if (err1 || err2) {
              console.log("Error1 ", err1);
              console.log("Error2", err2);
            } else {
              global.foodItem = data;
              global.foodCatagory = catData;
            }
          });
        });
      }
    }
  );
};

module.exports = mongoDB;
