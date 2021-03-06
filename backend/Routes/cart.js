const express = require(`express`);

const {
  addToCart,
  deleteFromCart,
  getCart,
  removeAll,
  totalPrice,
  updateById,
  total,
  getAllCart
  /* subTotal */
} = require(`../controllers/cart`);

const { authentication } = require(`../middlewares/authentication`);

const cartRouter = express.Router();
/* cartRouter.put(`/subtotal`, subTotal);
 */ cartRouter.put(`/totalPrice`, totalPrice);
cartRouter.post(`/add`, authentication, addToCart);
cartRouter.get(`/`,authentication, getCart);
cartRouter.delete(`/removeAll`,authentication, removeAll);
cartRouter.put(`/update/:id`,authentication,updateById)
cartRouter.get(`/total`,authentication,total)
cartRouter.get(`/all`,authentication,getAllCart)
cartRouter.delete(`/delete/:id`,authentication, deleteFromCart);

module.exports = cartRouter;
