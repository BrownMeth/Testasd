const mongoose = require('mongoose');

const movieTrackSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    watchedDate: {
        type: Date,
        required: true
    },
    rating: {
        type: Number,
        min: 0,
        max: 10
    },
    review: {
        type: String,
        maxlength: 500
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User' // Assuming there is a User model
    }
});

module.exports = mongoose.model('MovieTrack', movieTrackSchema);