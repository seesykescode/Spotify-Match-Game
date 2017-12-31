const express = require('express'),
      app = express(),
      cors = require('cors'),
      bodyParser = require('body-parser'),
      morgan = require('morgan'),
      dotenv = require('dotenv'),
      mongoose = require('mongoose'),
      PORT = process.env.PORT || 3000


     mongoose.connect('mongodb://localhost/Spotify-Game', (err) => {
         console.log(err || "Connected to MongoDB")
     })
      app.listen(PORT, (err)=>{
          console.log(err || `Express server is now listening on port ${PORT}`)
      })

