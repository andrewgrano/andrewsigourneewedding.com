var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");

router.use(bodyParser.urlencoded({ extended: true }));

router.get('/', function(req, res) {
    res.render("index", { title: "Andrew and Sigournee are Getting Married!" });
});

// router.get('/about', function(req, res) {
//     res.render('about/about', { title: "About" });
// });

router.get('/engagement-photos', function(req, res) {
    res.render('engagement-photos', { title: "Engagement Photos : Andrew and Sigournee" });
});

router.get('/groomsmen', function(req, res) {
    res.render('groomsmen', { title: "Groomsmen : Andrew and Sigournee's Wedding" });
});


router.use(function(req, res){
    res.status(404).render('404', { title: "404 - Not Found" });
});

module.exports = router;
