const mongoose= require('mongoose')

const InSchema=new mongoose.Schema({

    inventryid:String,
    inventrytype:String,
    itemname:String,
    quantity:Number

})

module.exports=mongoose.model('InventaryTable',InSchema)