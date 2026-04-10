var express = require('express');
const costume_controllers = require('../controllers/costume');
var router = express.Router();

// GET all costumes
router.get('/', costume_controllers.costume_list);

// POST create a new costume
router.post('/', costume_controllers.costume_create_post);

// GET one costume by ID
router.get('/:id', costume_controllers.costume_detail);

// PUT update a costume by ID
router.put('/:id', costume_controllers.costume_update_put);

// DELETE a costume by ID
router.delete('/:id', costume_controllers.costume_delete);

module.exports = router;