const mongoose= require('mongoose')

const orderSchema=new mongoose.Schema({

  itemname:String,
  itemquantity:Number

})

module.exports=mongoose.model('orderTable',orderSchema)