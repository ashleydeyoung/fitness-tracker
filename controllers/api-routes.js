//require db
var db = require("../models");

//exports mondule
module.exports = function (app) {
    //route to find all workout document
  app.get("/api/workouts", (req, res) => {
    db.Workout.find({})
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.json(err);
      });
  });
    
    //post route to create new workout
  app.post("/api/workouts", (req, res) => {
    db.Workout.create({
        //sets date to new day
      day: new Date().setDate(new Date().getDate()),
    })
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.json(err);
      });
  });

    // put route to update workout entry
  app.put("/api/workouts/:id", (req, res) => {
    //update workout document
    db.Workout.update(
      {
        _id: req.params.id,
      },
      {
        $push: {
          exercises: req.body,
        },
      },
      (error, data) => {
        if (error) {
          res.json(error);
        } else {
          res.json(data);
        }
      }
    );
  });

  //route for stats page
  app.get("/api/workouts/range", (req, res) => {
      //finds all workouts
    db.Workout.find({})
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.json(err);
      });
  });
};
