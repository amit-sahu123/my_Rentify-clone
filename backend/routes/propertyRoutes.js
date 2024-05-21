const express = require('express');
const { getProperties, createProperty, updateProperty, deleteProperty } = require('../controllers/propertyController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.get('/', getProperties);
router.post('/', authMiddleware, createProperty);
router.put('/:id', authMiddleware, updateProperty);
router.delete('/:id', authMiddleware, deleteProperty);

module.exports = router;
