const express = require("express");
const router = express.Router();

const {
     createOrder,
     getAllOrder,
     getOrderbyId,
     getOrder,
     removeOrder,
     updateOrder,
//   getOrderStatus,
//   updateStatus
} = require("../controller/orderController");

//Create Order
router.post("/createorder",createOrder);  //http://localhost:4000/api/order/create
//GetAllOrder
router.get("/getallorders",getAllOrder); //http://localhost:4000/api/order/getallorders
router.param("orderId", getOrderbyId); //param : parameter
//Find OrderById
 router.get("/orderbyid/:orderId", getOrder)  //http://localhost:4000/api/orderbyid/
//Remove Order
router.delete("/removeorderbyid/:orderId",removeOrder); //http://localhost:4000/api/removeorderbyid/
//Update Order 
router.put("/updateorderbyid/:orderId", updateOrder); //http://localhost:4000/api/updateorderbyid/

module.exports = router;
