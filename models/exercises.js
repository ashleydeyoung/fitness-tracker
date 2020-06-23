const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ExercisesSchema = new Schema({
    type: {
        type: String,
        trim: true,
        required: "Type of Exercise Required"
    }, 
    name: {
        type: String,
        trim: true,
        required: "Name of Exercise Required"
  },
    duration: {
        type: Number
    },
    weight: {
        type: Number
    },
    reps: {
        type: Number
    },
    sets: {
        type: Number
    },
    distance: {
        type: Number
    }
  
});

const Exercises = mongoose.model("Exercises", ExercisesSchema);

module.exports = Exercises;