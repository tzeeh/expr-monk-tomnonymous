var express = require('express');
var router = express.Router();
var db = require('monk')('mongodb://localhost/tomSite');
var assert = require('assert');
var blog = db.get('blog');





/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

// GET DATA
router.get('/get-data', function(req, res, next) {
  blog.find({}).then( function(docs){
    console.log(docs);
    res.render('index',{items: docs});
  });
});

// INSERT DATA
router.post('/insert', function(req, res, next) {
  var item = {
    title: req.body.title,
    content: req.body.content,
    author: req.body.author,
    tags: req.body.tags,
    urlTags: req.body.urlTags
  };
  blog.insert(item);
  res.redirect('/');
});

// UPDATE DATA
router.post('/update', function(req, res, next){
  var item = {
    title: req.body.title,
    content: req.body.content,
    author: req.body.author,
    tags: req.body.tags,
    urlTags: req.body.urlTags
  };
  var id = req.body.id;
  // can do this way too
  // blog.update({'_id': db.id(id)}, item);
  blog.update(id, item);
  res.redirect('/');
});

// DELETE DATA 
router.post('/delete', function(req, res, next){
  var id = req.body.id;
  blog.remove(id);
  res.redirect('/');
});


module.exports = router;
