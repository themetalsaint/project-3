const mongoose = require('mongoose');

<<<<<<< HEAD
mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/programming-thoughts',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);
=======
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/googlebooks', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});
>>>>>>> master

module.exports = mongoose.connection;
