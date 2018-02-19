'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const express = require('express');
const router = express.Router();
var shoppingList = require('../controllers/shoppingListController');

// shoppingList Routes

router.get('/items', (req, res, next) => {
    shoppingList.list_all_items(req, res);
});

router.post('/items', (req, res, next) => {
    shoppingList.create_a_item(req, res);
});

router.delete('/items/:itemId', (req, res, next) => {
    shoppingList.delete_a_item(req, res);
});

router.put('/items/:itemId/:status', (req, res, next) => {
    shoppingList.update_a_item(req, res);
});

module.exports = router;
