const express = require('express');
const { placeOrder, getUserOrders, removeOrder } = require('../controllers/orderController');
const router = express.Router();

router.post('/:cartId', placeOrder);
router.get('/:userId', getUserOrders);
router.delete('/:cartId', removeOrder);

module.exports = router;
