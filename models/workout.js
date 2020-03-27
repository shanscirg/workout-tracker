const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Number,
        default: new Date()
    },
    exercises: [
        {
            type: {
                type: String,
                trim: true
            },
            name: {
                type: String,
                trim: true
            },
            duration: {
                type: Number
            },
            distance: {
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
            }
        }
    ]
},
    {
        toJSON: {
            // include any virtual properties when data is requested
            virtuals: true
        }
    }
);

workoutSchema.virtual('totalDuration').get(function() {
    let total = 0;
    for (let i = 0; i < this.exercises.length; i++) {
        total += this.exercises[i].duration;
    }
    return total;
})


const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
