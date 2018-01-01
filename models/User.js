const mongoose = require('mongoose'),
      findOrCreate = require('mongoose-find-or-create')
      userSchema = new mongoose.Schema({
          displayName: {type: String, required: true},
          userName: {type: String, required: true},
          email: {type:String, required: true},
          profileImage: {type: String, required: false}
      }, {timestamps: true})

      userSchema.plugin(findOrCreate)

      const User = mongoose.model("User", userSchema)

      module.exports = User