const mongoose=require("mongoose");
const { type } = require("os");


const CartSchema=new mongoose.Schema(
    {
        userId:{type:String, required:true , },
        products:[
            {producId:{type:String},
             quantity:{type:Number,
                default:1,
             },
            }
        ],


    },
    {timestamps:true}
);
module.exports=mongoose.model("Cart",CartSchema)