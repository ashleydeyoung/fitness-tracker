var db = require("../models");


module.exports = function (app) {
  app.get("/api/workouts", (req, res) => {
    db.Workout.find({})
      .then((dbWorkout) => {
        
        res.json(dbWorkout);

      })
      .catch((err) => {
        res.json(err);
      });
  });

  app.post("/api/workouts", (req, res) => {
    db.Workout.create({
        day: new Date().setDate(new Date().getDate()),
    })
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  

  app.put("/api/workouts/:id", (req, res) => {
    db.Workout.update(
      {
        _id: req.params.id,
      },
      {
        $push: {
          exercises: req.body
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

  app.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
      .then((dbWorkout) => {
        res.json(dbWorkout);

      })
      .catch((err) => {
        res.json(err);
      });
  })

};
