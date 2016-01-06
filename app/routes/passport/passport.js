var express = require('express');
var router = express.Router();
var passport = require('passport');
var acl = require('../../components/acl.js');

var User = require('../../models/user');

/*-----------------------
  Register
------------------------- */

router.route('/user')
    .get(function(req, res) {
        // User.remove({}, function(err, user) {
        //     if (err) {
        //         return res.send(err);
        //     }
        //     res.json({
        //         message: 'Successfully deleted all'
        //     });
        // });
        User.find(function(err, users) {
            if (err) return res.send(err)
            res.json(users);
        });
    })

router.get('/register', function(req, res) {
    res.render('./passport/register', {});
});

router.post('/register', function(req, res) {
    User.register(new User({
        username: req.body.username
    }), req.body.password, function(err, User) {
        if (err) {
            return res.render('./passport/register', {
                User: User
            });
        }

        passport.authenticate('local')(req, res, function() {
            res.redirect('/');
        });
    });
});

/*-----------------------
  Login
------------------------- */
router.get('/login', function(req, res) {
    acl.allowedPermissions('joed', ['blogs', 'forums'], function(err, permissions) {
        console.log(permissions)
    })
    acl.isAllowed('joed', 'blogs', 'view', function(err, res) {
        if (res) {
            console.log("User joed is allowed to view blogs")
        }
    });
    res.render('./passport/login', {
        user: req.user
    });
});

router.post('/login', passport.authenticate('local'), function(req, res) {
    res.redirect('/');
});

/*-----------------------
  Logout
------------------------- */
router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});


module.exports = router;
