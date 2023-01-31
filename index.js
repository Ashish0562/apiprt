const express=require('express');
const mongoose=require('./connect')
const Inventary=require('./models/Inventary')
const customer=require('./models/custmor')
const order=require('./models/order')
const app=express();

app.use(express.json())

app.post('/createInventory',async(req,res)=>{
    const table= await Inventary.create(req.body)
    try {
        res.status(200).json({
           status: 'success',
           table
        })
    } catch (e) {
        res.status(404).json({
            status: 'fail',
            message: 'error found'
        })
    }
})

app.post('/createCustomer',async(req,res)=>{
    const table= await customer.create(req.body)
    try {
        res.status(200).json({
           status: 'success',
           table
        })
    } catch (e) {
        res.status(404).json({
            status: 'fail',
            message: 'error found'
        })
    }
})

app.post('/createOrders',async(req,res)=>{
    const table= await customer.create(req.body)
    try {
        res.status(200).json({
           status: 'success',
           table
        })
    } catch (e) {
        res.status(404).json({
            status: 'fail',
            message: 'error found'
        })
    }
})

app.get('/orders',async(req,res)=>{
    const table= await order.find()
    try {
        res.status(200).json({
           status: 'success',
           table
        })
    } catch (e) {
        res.status(404).json({
            status: 'fail',
            message: 'error found'
        })
    }
})


app.get('/inventory',async(req,res)=>{
    const table= await Inventary.find()
    try {
        res.status(200).json({
           status: 'success',
           table
        })
    } catch (e) {
        res.status(404).json({
            status: 'fail',
            message: 'error found'
        })
    }
})

app.get('/customerDetails',async(req,res)=>{
    const table= await customer.find()
    try {
        res.status(200).json({
           status: 'success',
           table
        })
    } catch (e) {
        res.status(404).json({
            status: 'fail',
            message: 'error found'
        })
    }
})

app.get('/inventory/:inventoryType',async(req,res)=>{
    const table= await Inventary.find(req.query.search)
    try {
        res.status(200).json({
           status: 'success',
           table
        })
    } catch (e) {
        res.status(404).json({
            status: 'fail',
            message: 'error found'
        })
    }
})

app.get( '/:itemName/availableQuantity',async(req,res)=>{
    const table= await Inventary.find(req.query.search)
    try {
        res.status(200).json({
           status: 'success',
           table
        })
    } catch (e) {
        res.status(404).json({
            status: 'fail',
            message: 'error found'
        })
    }
})






app.listen(3005)