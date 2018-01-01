const express = require('express'),
    router = express.Router(),  
    spotifyWebAPI = require('spotify-web-api-node')

   let spotifyApi = new spotifyWebAPI

    router.get('/user/:id', (req, res) => {
        spotifyApi.setAccessToken(req.user.accessToken)
        spotifyApi.getUserPlaylists(req.params.id)
            .then((data) => {
                if (data.body.items.length === 0) res.json('this user either does not exist or does not have any playlists created')
                else res.json(data.body);
           })
            .catch((err) => res.json(err))
    })

    router.get('/featured', (req, res) => {
        spotifyApi.setAccessToken(req.user.accessToken)
        spotifyApi.getFeaturedPlaylists({limit: 10})
            .then((data) => {
                res.json(data.body)
            })
            .catch((err) => res.json(err))
    })

    module.exports = router