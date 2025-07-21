const mongoose = require('mongoose');

const DocumentSchema = new mongoose.Schema({
  _id: String, // Use Socket.io room ID or any identifier
  title: {
    type: String,
    required: false, // Change to false if you don't need it always
    default: 'Untitled Document'
  },
  content: {
    type: mongoose.Schema.Types.Mixed, // Accepts plain string or Quill Delta
    required: false
  }
});

module.exports = mongoose.model('Document', DocumentSchema);
