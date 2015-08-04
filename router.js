var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");

router.use(bodyParser.urlencoded({ extended: true }));

router.get('/', function(req, res) {
    res.render("index", { title: "Hello Node!" });
});

router.get('/about', function(req, res) {  
    res.render('about/about', { title: "About" });
});

router.use(function(req, res){
    res.status(404).render('404', { title: "404 - Not Found" });
});

module.exports = router;