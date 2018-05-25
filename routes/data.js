var express = require('express');
var cors = require('cors');
var router = express.Router();
var db = require('monk')('mongodb://localhost/tomSite');

router.use(cors());
var blog = db.get('blog');

/* GET data listing. */
router.get('/get-blog-posts', function(req, res, next) {
  blog.find({})
  .then( data =>  res.json(data));
});

module.exports = router;
