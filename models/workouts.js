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
  ],
  
},
{
    //virtual
    toJSON: {
      virtuals: true
    }
  }
);

// WorkoutSchema.methods.getTotalDuration = function() {
//     exercisesArray = this.exercises;
//     newTotalDuration = this.totalDuration = 0;
//     for (let i = 0; i < exercisesArray.length; i++) {
//          newTotalDuration += exercisesArray[i].duration 
//     }
//   };


WorkoutSchema.virtual("totalDuration").get(function() {
    let total = 0;
    exercisesArr = this.exercises
    // console.log(exercisesArr)
    for (let i = 0; i < exercisesArr.length; i++) {
       total += exercisesArr[i].duration;
    }
    return total
  });

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;