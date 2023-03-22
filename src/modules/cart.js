const mongoose = require('mongoose')
const User = require('../modules/users')
const cartSchema = mongoose.Schema(
    {
        UserId:{
            type :  mongoose.Schema.Types.ObjectId,ref: 'userSchema'
        },
        
            voucher:{
                type : String ,
            required: false
        },
        sum:{
            type: Number,
            required: true,
            default: 0

        },
        quantity:{
            type: Number,
            require :false
        },
        totalDiscount:{
            type: Number ,
            required : false,
            default: 0
        },
        total:{
            type: Number,
            require :true,
            default: 0
        }

    }
    
) 
const Cart = mongoose.model('Cart',cartSchema);
module.exports = Cart;