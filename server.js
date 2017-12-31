const express = require('express'),
      app = express(),
      cors = require('cors'),
      bodyParser = require('body-parser'),
      morgan = require('morgan'),
      mongoose = require('mongoose'),
      passport = require('passport')
      PORT = process.env.PORT || 3001


    //middleware
require('dotenv').config()
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(passport.initialize())

    //routes
      const authRoutes = require('./routes/auth'),
            userRoutes = require('./routes/user')
            
     app.use('/api/auth', authRoutes)
     app.use('/api/user', userRoutes)
   




     mongoose.connect('mongodb://localhost/Spotify-Game', (err) => {
         console.log(err || "Connected to MongoDB")
     })
      app.listen(PORT, (err)=>{
          console.log(err || `Express server is now listening on port ${PORT}`)
      })

