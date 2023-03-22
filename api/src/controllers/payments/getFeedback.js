const getFeedback = async(req,res)=>{
    res.json({
        todo:req.query,
        //Payment: req.query.payment_id,
        //Status: req.query.status,
        //MerchantOrder: req.query.merchant_order_id
    });
}

module.exports = getFeedback






