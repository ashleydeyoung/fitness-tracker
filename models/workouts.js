const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        required: "Date is Required"
    },
    exercises: [
        {
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
          
        }
  ]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;