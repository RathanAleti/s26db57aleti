var express = require('express');
var router = express.Router();

var api_controller = require('../controllers/api');
var costume_controller = require('../controllers/costume');

const secured = (req, res, next) => {
    if (req.user){
      return next();
    }
    res.redirect("/login");
}

router.post('/costumes', costume_controller.costume_create_post);
router.delete('/costumes/:id', costume_controller.costume_delete);
router.put('/costumes/:id', costume_controller.costume_update_put);
router.get('/costumes/:id', costume_controller.costume_detail);
router.get('/', costume_controller.costume_view_all_Page);
router.get('/detail', costume_controller.costume_view_detail_Page);
router.get('/create', costume_controller.costume_view_create_Page);
router.get('/update', secured, costume_controller.costume_view_update_Page);
router.get('/delete', costume_controller.costume_view_delete_Page);

module.exports = router;