const Products = require('../Models/productsModel')


exports.createProduct = async (req,res,next)=>{
    
    const products = await Products.create(req.body)

    res.status(201).json({
        success:true,
        products
    })
}

exports.getAllProducts = (req,res)=>{

    res.status(200).json({message:'route is working fine'})

}