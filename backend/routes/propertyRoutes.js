const express = require('express');
const { getProperties,getPropertyDetails, createProperty, updateProperty, deleteProperty } = require('../controllers/propertyController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.get('/', getProperties);
router.get('/:id',authMiddleware, getPropertyDetails);
router.post('/', authMiddleware, createProperty);
router.put('/:id', authMiddleware, updateProperty);
router.delete('/:id', authMiddleware, deleteProperty);

module.exports = router;
