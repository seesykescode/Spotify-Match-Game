const express = require('express'),
      app = express(),
      cors = require('cors'),
      bodyParser = require('body-parser'),
      cookieParser = require('cookie-parser'),
      cookieSession = require('cookie-session')
      morgan = require('morgan'),
      mongoose = require('mongoose'),
      passport = require('passport')
      PORT = process.env.PORT || 3001


    //middleware
require('dotenv').config()
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(cookieSession({ secret: "realitygem", resave: false, saveUninitialized: false }))  
app.use(passport.initialize())
app.use(passport.session())

    //routes
const authRoutes = require('./routes/auth'),
    userRoutes = require('./routes/user'),
    playListRoutes = require('./routes/playlists')
            
app.use('/api/auth', authRoutes)
app.use('/api/user', userRoutes)
app.use('/api/playlist', playListRoutes)
   




     mongoose.connect('mongodb://localhost/Spotify-Game', (err) => {
         console.log(err || "Connected to MongoDB")
     })
      app.listen(PORT, (err)=>{
          console.log(err || `Express server is now listening on port ${PORT}`)
      })

