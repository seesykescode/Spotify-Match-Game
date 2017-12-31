const express = require('express'),
    router = express.Router(),
    passport = require('passport'),
    User = require('../models/User')
    SpotifyStrategy = require('passport-spotify').Strategy;

passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (obj, done) {
    done(null, obj);
});


passport.use(new SpotifyStrategy({
    clientID: process.env.SPOTIFY_CLIENT_ID,
    clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
    callbackURL: "http://localhost:3001/api/auth/spotify/callback"
},
    function (accessToken, refreshToken, profile, done) {
       process.nextTick( function (){
           let newUserProfile = {
               userName: profile.username,
               displayName: profile.displayName,
               profileImage: profile.photos[0],
               email: profile.emails[0].value
           }

           User.create(newUserProfile, (err, user) => {
                if (err) return console.log(err)
                done(null, user)
           })
           
       })
    }
));

router.get('/spotify',
    passport.authenticate('spotify', { scope: ['user-read-email', 'user-read-private'], showDialog: true }),
    function (req, res) {
        // The request will be redirected to spotify for authentication, so this
        // function will not be called.
    });

router.get('/spotify/callback',
    passport.authenticate('spotify', { failureRedirect: '/login' }),
    function (req, res) {
        // Successful authentication, redirect home.
        res.redirect('http://localhost:3001');
    });

router.get('/logout', (req, res) => {
    req.logout()
    res.redirect('http://localhost:3001')
})

    module.exports = router