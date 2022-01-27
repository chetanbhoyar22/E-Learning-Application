const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const orderSchema = new mongoose.Schema(
  {
    course: {
      type: ObjectId,
      ref: "Course"
    },
    orderItems: [
      {
        name: { type: String, required: true },
        price: { type: Number, required: true },
        course: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: "Course",
        },
      },
    ],
    paymentMethod: {
      type: String,
      required: true,
    },
    taxPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    totalPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    isPaid: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model("Order", orderSchema);

module.exports = { Order};