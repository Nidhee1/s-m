var express = require('express');
var router = express.Router();
var userModel = require("./users")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/feed', function(req, res, next){
  userModel.find()
  .then(function(allusers){
    res.render("feed", {allusers}); 
  })
})
router.get('/delete', function(req, res, next){
  userModel.deleteMany()
  .then(function(allusers){
    res.render("/feed"); 
  })
})
router.post('/create', function(req, res, next) {
  userModel.create({
    email: req.body.email,
    fullname: req.body.fullname,
    profile: req.body.profile
  }).then(function(createUser)
  {
    res.send(createUser)
  });
});
router.get("/like/:id",function(req,res){
  userModel.findOne({_id:req.params.id}).then(function(data){
    data.likes++,
    data.save().then(function(saveuser){
      res.redirect('back')
    })
  })
})




module.exports = router;



//passward js 
//authentication (login and reg to and widesite to wo puchega ki ye ap hi ho ya nhi )
//authorization ()