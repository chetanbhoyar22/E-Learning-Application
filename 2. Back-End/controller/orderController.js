const { Order } = require("../model/orderModel");

exports.createOrder = (req, res) => 
{
const order = new Order(req.body);

  order.save((error, orderData) => 
  {
    if (error) 
    {
      return res.status(400).json({
        error: "Failed To Save Your Order In DB"
      });
    }
    res.json(orderData);
  });

};

// to read all order
exports.getAllOrder = (req, res) => 
{
  Order.find().exec((error, orderData) => 
  {
    if (error) {
      return res.status(400).json({
        error: "No Order Found"
      });
    }
    res.json(orderData);
  });
};

 //to find order
  exports.getOrderbyId = (req, res, next, id) => 
   {
      Order.findById(id) 
      .exec((error, orderData) => 
          {
              if (error) {
              return res.status(400).json({
              error: "Order Not Found"
          });
    }

    req.order = orderData;  //global variable 

    next();
  
  });
};

//to find order byId
exports.getOrder = (req, res) => 
{
  return res.json(req.order);

};

// to remove order byuserId
   exports.removeOrder = (req, res) =>
    {
      const order = req.order;

       order.remove((error, order) => {
   if (error) {
     return res.status(400).json({
       error: "Failed To Delete This Order"
     });
   }
   res.json({
     message: "Successfully Deleted"
   
   });
 });
};

//to update order
 exports.updateOrder = (req, res) => 
 {
    const order = req.order;
    order.course = req.body.course
    order.orderItems = req.body.orderItems
    order.name = req.body.name;
    order.price = req.body.price;
    order.course = req.body.course;
    order.paymentMethod = req.body.paymentMethod;
    order.taxPrice = req.body.taxPrice;
    order.totalPrice= req.body.totalPrice;
    order.isPaid=req.body.isPaid;

       order.save((error, updatedOrder) => {
         if(error) {
           return res.status(400).json({
             error: "Failed To Update Order"
           });
         }
         res.json(updatedOrder);
     
     
        });
    };


