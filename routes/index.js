var express = require('express');
var router = express.Router();
var assert = require('assert');
var db = require('monk')('mongodb://localhost/tomSite');
var blog = db.get('blog');





/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

// GET DATA
router.get('/get-data', function(req, res, next) {
  blog.find({}).then( function(docs){
    res.render('index',{items: docs});
    console.log(docs)
  });
});

// INSERT DATA
router.post('/insert', function(req, res, next) {
  var item = {
    title: req.body.title,
    content: req.body.content,
    author: req.body.author,
    tags: req.body.tags,
    urlTags: req.body.urlTags,
    dateCreated: new Date()
  };
  blog.insert(item);
  res.redirect('/');
});

// UPDATE DATA
router.post('/update', function(req, res, next){
  var updatePost = {};
  var id = req.body.id;
  for(var key in req.body){
    if(req.body[key] != ''){
      if(key != 'id'){
        updatePost[key] = req.body[key];
      }
    }
  }
  // can do this way too
  // blog.update({'_id': db.id(id)}, item);
  blog.update(id, {$set:updatePost});
  res.redirect('/');
});

// DELETE DATA 
router.post('/delete', function(req, res, next){
  var id = req.body.id;
  blog.remove(id);
  res.redirect('/');
});


module.exports = router;
