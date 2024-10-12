const mongoose=require("mongoose");
const { type } = require("os");
const { object } = require("webidl-conversions");


const OrderSchema=new mongoose.Schema(
    {
        userId:{type:String, required:true , },
        products:[
            {producId:{type:String},
             quantity:{type:Number,
                default:1,
             },
            }
        ],
        amount:{type:Number, required:true},
        address:{type:Object, required:true},
        status:{type:String, default:"pending"}


    },
    {timestamps:true}
);
module.exports=mongoose.model("Order",OrderSchema)